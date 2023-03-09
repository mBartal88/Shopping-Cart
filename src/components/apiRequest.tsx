const apiRequest = async (url: string, optionsObj: RequestInit, errMsg: string | null = null) => {
    try {
        const response = await fetch(url, optionsObj);
        if (!response.ok) throw Error('Please reload the app!');

    } catch (error) {
        if (error instanceof Error)
        errMsg = error.message

    } finally {
        return errMsg;
    }

}

export default apiRequest;