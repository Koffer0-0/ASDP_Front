import {NCALayerClient} from "ncalayer-js-client"

export function useSigex() {

    const domenFull = "https://sigex.kz"
    const domen = "sigex.kz"
    const title = 'nca_tests';
    const file: File | null;

    const documentSign: string = "";
    const textSign: string = "";

    const textToSign: string;

    const jwt: string

    async function signDocument() {
        const ncalayerClient = new NCALayerClient();

        try {
            await ncalayerClient.connect();
            console.log("connected")
        } catch (error) {
            window.alert(`Не удалось подключиться к NCALayer: ${error.toString()}`);
            return;
        }

        let activeTokens;
        try {
            activeTokens = await ncalayerClient.getActiveTokens();
            console.log("active tokens")
        } catch (error) {
            window.alert(error.toString());
            return;
        }

        // getActiveTokens может вернуть несколько типов хранилищ, для простоты проверим первый.
        // Иначе нужно просить пользователя выбрать тип носителя.
        const storageType = activeTokens[0] || NCALayerClient.fileStorageType;

        const documentInBase64 = 'MTEK';

        console.log("storageType")
        console.log(storageType)
        let base64EncodedSignature;
        try {
            base64EncodedSignature = await ncalayerClient.createCAdESFromBase64(storageType, this.file);

            /*let s = await ncalayerClient.signXml(storageType, '<data>test</data>');

            console.log("signXml");
            console.log(s)*/

            console.log("base64EncodedSignature")
            console.log(base64EncodedSignature)
        } catch (error) {
            window.alert(error.toString());
            console.log(error.toString())
            return;
        }

        return base64EncodedSignature;
    }

    async function signText() {
        const ncalayerClient = new NCALayerClient();

        try {
            await ncalayerClient.connect();
            console.log("connected")
        } catch (error) {
            window.alert(`Не удалось подключиться к NCALayer: ${error.toString()}`);
            return;
        }

        let activeTokens;
        try {
            activeTokens = await ncalayerClient.getActiveTokens();
            console.log("active tokens")
        } catch (error) {
            window.alert(error.toString());
            return;
        }

        // getActiveTokens может вернуть несколько типов хранилищ, для простоты проверим первый.
        // Иначе нужно просить пользователя выбрать тип носителя.
        const storageType = activeTokens[0] || NCALayerClient.fileStorageType;

        const documentInBase64 = 'MTEK';

        console.log("storageType")
        console.log(storageType)
        let base64EncodedSignature;
        try {
            base64EncodedSignature = await ncalayerClient.createCAdESFromBase64(storageType, this.textToSign);

            /*let s = await ncalayerClient.signXml(storageType, '<data>test</data>');

            console.log("signXml");
            console.log(s)*/

            console.log("base64EncodedSignature")
            console.log(base64EncodedSignature)
        } catch (error) {
            window.alert(error.toString());
            console.log(error.toString())
            return;
        }

        return base64EncodedSignature;
    }

    function auth() {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json'); // Correct header name

        console.log(this.domenFull)
        // Pass headers inside options (third parameter)
        this.http.post(this.domenFull + "/api/auth", {}, {headers})
            .subscribe(
                async (res: any) => {
                    console.log("nonce");
                    console.log(res.nonce);

                    this.textToSign = res.nonce

                    await this.signTextHandler()

                    this.authStep2()
                },
                err => {
                    console.error("Error occurred:", err);
                }
            );
    }

    function registerDocument() {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json'); // Correct header name

        this.http.post(this.domenFull + "/api", {
            title: "test",
            signature: this.documentSign,
            settings: {
                signersRequirements: [
                    {
                        iin: "IIN011226550429",
                    }
                ]
            }
        }, {headers})
            .subscribe(
                async (res: any) => {
                    console.log("register response");
                    console.log(res);
                },
                err => {
                    console.error("Error occurred:", err);
                }
            );
    }


    return {
        auth,
        signText,
        signDocument,
    }
}