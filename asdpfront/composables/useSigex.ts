import { NCALayerClient } from "ncalayer-js-client";
import { ref } from "vue";
import axios from "axios"; // Use axios for HTTP requests

export function useSigex() {
    const domenFull = ref("https://sigex.kz");
    const domen = "sigex.kz";
    const title = ref('nca_tests');
    const file = ref(null);
    const documentSign = ref("");
    const textSign = ref("");
    const textToSign = ref("");
    const jwt = ref("");

    const { fetchEmployeeByIin } = useAuth()

    async function signDocument() {
        const ncalayerClient = new NCALayerClient();

        try {
            await ncalayerClient.connect();
            console.log("connected");
        } catch (error) {
            window.alert(`Не удалось подключиться к NCALayer: ${error.toString()}`);
            return;
        }

        let activeTokens;
        try {
            activeTokens = await ncalayerClient.getActiveTokens();
            console.log("active tokens");
        } catch (error) {
            window.alert(error.toString());
            return;
        }

        const storageType = activeTokens[0] || NCALayerClient.fileStorageType;
        const documentInBase64 = 'MTEK';

        console.log("storageType");
        console.log(storageType);
        let base64EncodedSignature;
        try {
            base64EncodedSignature = await ncalayerClient.createCAdESFromBase64(storageType, file.value);
            console.log("base64EncodedSignature");
            console.log(base64EncodedSignature);
        } catch (error) {
            window.alert(error.toString());
            console.log(error.toString());
            return;
        }

        return base64EncodedSignature;
    }

    async function signText() {
        const ncalayerClient = new NCALayerClient();

        try {
            await ncalayerClient.connect();
            console.log("connected");
        } catch (error) {
            window.alert(`Не удалось подключиться к NCALayer: ${error.toString()}`);
            return;
        }

        let activeTokens;
        try {
            activeTokens = await ncalayerClient.getActiveTokens();
            console.log("active tokens");
        } catch (error) {
            window.alert(error.toString());
            return;
        }

        const storageType = activeTokens[0] || NCALayerClient.fileStorageType;

        console.log("storageType");
        console.log(storageType);
        let base64EncodedSignature;
        try {
            base64EncodedSignature = await ncalayerClient.createCAdESFromBase64(storageType, textToSign.value);
            console.log("base64EncodedSignature");
            console.log(base64EncodedSignature);
            textSign.value = base64EncodedSignature;
        } catch (error) {
            window.alert(error.toString());
            console.log(error.toString());
            return;
        }

        return base64EncodedSignature;
    }

    async function auth() {
        try {
            const response = await axios.post(`${domenFull.value}/api/auth`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log("nonce");
            console.log(response.data.nonce);

            textToSign.value = response.data.nonce;

            await signText();

            await authStep2();
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }

    async function authStep2() {
        try {
            const response = await axios.post(`${domenFull.value}/api/auth`, {
                signature: textSign.value,
                nonce: textToSign.value,
                external: false,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log("res");
            console.log(response.data);
            const subject = response.data.subject;
            // Split the string by commas to separate the fields
            const fields = subject.split(',');

            const nameField = fields.find(field => field.startsWith('CN='));
            const name = nameField ? nameField.substring(3).split(' ')[1] : "";

            const surnameField = fields.find(field => field.startsWith('SURNAME='));
            const surname = surnameField ? surnameField.substring(8) : "";

            const iinField = fields.find(field => field.startsWith('SERIALNUMBER=IIN'));
            // const iin = iinField ? iinField.substring(16) : "";
            const iin = "030303030303"

            console.log("cookies:");
            console.log(document.cookie);

            try {
                await fetchEmployeeByIin(name, surname, iin)
            } catch(err) {
                console.log(err)
            }
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }

    async function registerDocument() {
        try {
            const response = await axios.post(`${domenFull.value}/api`, {
                title: "test",
                signature: documentSign.value,
                settings: {
                    signersRequirements: [
                        {
                            iin: "IIN011226550429",
                        }
                    ]
                }
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log("register response");
            console.log(response.data);
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }

    return {
        auth,
        signDocument,
        registerDocument,
    };
}
