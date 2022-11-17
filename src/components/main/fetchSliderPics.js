export function fetch_slider_pics() {
    new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN }).filesListFolder({path: '/slider'})
             .then((res) => {
                 return res.entries.map(x => x.path_lower).sort().reverse()
             })
             .then((res) => {
                 Promise.all(res.map(x => new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
                 .filesGetTemporaryLink({ path: x })))
                     .then((result) => {
                        // this.setState({ dbImgs: result });
                        return result
                     })
                     .catch((error) => {
                         const pubimages = importAll(require.context('../../../public/foto/carousel', false, /\.(png|jpe?g|svg)$/));
                         const list2 = pubimages.map(x => x.split("/")[3].split(".")[0]);
                         // this.setState({ dbImgs: list2 });
                         console.error(error);
                         return list2
                     });
                 }
             )
             .catch((error) => {
                 console.error(error);
             })
}