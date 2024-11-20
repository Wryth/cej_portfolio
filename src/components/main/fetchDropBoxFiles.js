import Dropbox from "dropbox";

function importAll(r) {
    return r.keys().map(r);
}


const fetch_slider_pics_links = async (res) => {
    return Promise.all(res.map(x => new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
        .filesGetTemporaryLink({ path: x })))
        .then((result) => {
            return result
        })
        .catch(() => {
            const pubimages = importAll(require.context('../../../public/foto/carousel', false, /\.(png|jpe?g|svg)$/));
            const list2 = pubimages.map(x => x.split("/")[3].split(".")[0]);
            console.log("Failed to get slider links");
            return list2
        });
}

const fetch_slider_pics = async () => {
    return new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
        .filesListFolder({ path: '/slider' })
        .then(res => res.entries
            .map(x => x.path_lower)
            .sort()
            .reverse())
        .then(fetch_slider_pics_links)
        .catch(() => {
            console.log("Failed to find slider folder");
        })
}

const fetch_home_pic_link = async (res) => {
    return new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
        .filesGetTemporaryLink({ path: res[0] })
        .then(result => result.link)
        .catch(() => {
            console.log("Failed to get home pic link");
            return 'https://www.instagram.com/p/B2OYGi-BfVG/media/?size=l'
        });
}

const fetch_home_pic = async () => {
    return new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
        .filesListFolder({ path: '/home' })
        .then(res => res.entries.map(x => x.path_lower))
        .then(fetch_home_pic_link)
        .catch(() => {
            console.log("Failed to find home folder");
        })
}

const fetch_json = async (path) => {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
}

const fetch_cv_link = async (path) => {
    return new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
        .filesGetTemporaryLink({ path: path[0] })
        .then(result => result.link)
        .then(fetch_json)
        .catch(() => {
            console.log("Failed to read cv link");
        });
}

const fetch_cv_file = async () => {
    return new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
        .filesListFolder({ path: '/cv' })
        .then(res => res.entries.map(x => x.path_lower))
        .then(fetch_cv_link)
        .catch(_ => {
            console.log("Failed to find cv folder");
            console.log("Getting local file");
            const json = importAll(require.context('../../../public/', false, /\.(json)$/));

            console.log(json[0])
            return json[0]
        })
}

const fetch_pdf = async (path) => {
    const response = await fetch(path);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    //return response.blob();
    return response;
}


const fetch_pdf_link = async (path) => {
    return new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
        .filesGetTemporaryLink({ path: path[0] })
        .then(result => result.link)
        .then(x => {
            console.log(x)
            return x
        })
        //.then(fetch_pdf)
        .catch(() => {
            console.log("Failed to read pdf link");
        });
}

const fetch_pdf_file = async () => {
    return new Dropbox.Dropbox({ fetch: fetch, accessToken: process.env.REACT_APP_DBX_TOKEN })
        .filesListFolder({ path: '/pdf' })
        .then(res => res.entries.map(x => x.path_lower))
        .then(fetch_pdf_link)
        .catch(() => {
            console.log("Failed to find pdf folder");
            console.log("Getting local file");
            const pdf = importAll(require.context('../../../public/', false, /\.(pdf)$/));
            return pdf
        });
}

export {
    fetch_slider_pics as fetch_slider_pics_js,
    fetch_home_pic as fetch_home_pic_js,
    fetch_cv_file as fetch_cv_file_js,
    fetch_pdf_file as fetch_pdf_file_js
}