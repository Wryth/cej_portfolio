import Dropbox from "dropbox";

function importAll(r) {
    return r.keys().map(r);
}

// const 

const fetch_slider_pics2 = () => {
    return new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
        .filesListFolder({path: '/slider'})
        .then(res => res.entries
            .map(x => x.path_lower)
            .sort()
            .reverse())
        .then(async (res) => {
            return Promise.all(res.map(x => new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
                .filesGetTemporaryLink({ path: x })))
                .then((result) => {

                return result
                })
                .catch((error) => {
                    const pubimages = importAll(require.context('../../../public/foto/carousel', false, /\.(png|jpe?g|svg)$/));
                    const list2 = pubimages.map(x => x.split("/")[3].split(".")[0]);
                    console.error(error);
                    return list2
                });
        })
        .catch((error) => {
            console.error(error);
        })
}

const fetch_home_pic2 = () => {
    return new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
        .filesListFolder({path: '/home'})
        .then(res => res.entries.map(x => x.path_lower))
        .then(async (res) => {
                return new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
                    .filesGetTemporaryLink({ path: res[0] })
                    .then(result => result.link)
                    .catch((error) => {
                        console.error(error);
                        return 'https://www.instagram.com/p/B2OYGi-BfVG/media/?size=l'
                    });
            }
        )
        .catch((error) => {
            console.error(error);
        })
}

const fetch_cv_file2 = () => {
    return new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
        .filesListFolder({path: '/cv'})
        .then(res => res.entries.map(x => x.path_lower))
        .then(
            async (res) => {
                return new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
                    .filesGetTemporaryLink({ path: res[0] })
                    .then(result => result.link)
                    .catch((error) => {
                        console.error(error);
                        return ''
                    });
            }
        )
        .catch(error => {
            console.error(error)
            console.log("Getting local file");
            const json = importAll(require.context('../../../public/', false, /\.(json)$/));

            console.log(json[0])
            return json[0]
        })
}

export {
    fetch_slider_pics2,
    fetch_home_pic2,
    fetch_cv_file2
}