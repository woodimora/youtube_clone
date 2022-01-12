class Youtube {
    constructor(httpClient) {
        this.youtube = httpClient;
    }

    async mostPopular() {
        const response = await this.youtube.get('videos', {
            params: {
                chart: 'mostPopular',
            },
        });
        return response.data.items;
    }

    async search(query) {
        const response = await this.youtube.get('search', {
            params: {
                type: 'video',
                q: query,
            },
        });
        return response.data.items;
    }
}

export default Youtube;