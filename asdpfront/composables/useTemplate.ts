import {getChtotoTam} from "~/server/templateAPI";

export function useTemplate() {

    // тут смотри get/create/delete в зависимости от запроса
    const handleGetChtoto = async () => {
        // тут вызызываешь функцию с другого файла который оканчивается на api.
        // у них отдельная папка api будет называться
        return await getChtotoTam("и тут данные которые нужны в swaggere")
    }

    return {
        handleGetChtoto
    }
}
