import url from "url";
import a from "axios";
import {apiDevToProd, getAccessHeader, isProd} from "./DataUser";

const {
    REACT_APP_API_BASE_URL1,
    REACT_APP_API_BASE_URL2,
    REACT_APP_API_BASE_URL3,
    REACT_APP_API_BASE_URL4,

    REACT_APP_SECRET_KEY_LHP,
    REACT_APP_SECRET_KEY_PARSER,
    REACT_APP_SECRET_KEY_AMWS,
    REACT_APP_SECRET_KEY_ESEAL,
    REACT_APP_SECRET_KEY_PERIJINAN,
    REACT_APP_SECRET_KEY_SCE_WS,
    REACT_APP_SECRET_KEY_RISK_ENGINE,
    REACT_APP_SECRET_KEY_CSEARCH,
    REACT_APP_SECRET_KEY_HDFS,
    REACT_APP_SECRET_KEY_PFPD,
    REACT_APP_SECRET_KEY_REFERENSI,
    REACT_APP_SECRET_KEY_PERBAIKAN,
    REACT_APP_SECRET_KEY_SIMAUDI,
    REACT_APP_SECRET_KEY_BROWSE,
    REACT_APP_SECRET_KEY_SURAT_KUASA,
    REACT_APP_SECRET_KEY_AP,

    REACT_APP_SECRET_KEY_LHP__DEV,
    REACT_APP_SECRET_KEY_PARSER__DEV,
    REACT_APP_SECRET_KEY_ESEAL__DEV,
    REACT_APP_SECRET_KEY_PERIJINAN__DEV,
    REACT_APP_SECRET_KEY_RISK_ENGINE__DEV,
    REACT_APP_SECRET_KEY_CSEARCH__DEV,
    REACT_APP_SECRET_KEY_HDFS__DEV,
    REACT_APP_SECRET_KEY_PFPD__DEV,
    REACT_APP_SECRET_KEY_PERBAIKAN__DEV,
    REACT_APP_SECRET_KEY_SIMAUDI__DEV,
    REACT_APP_SECRET_KEY_BROWSE__DEV,
    REACT_APP_SECRET_KEY_SURAT_KUASA__DEV,
    REACT_APP_SECRET_KEY_AP__DEV,

    REACT_APP_SECRET_KEY_LHP__DEV2,
    REACT_APP_SECRET_KEY_PARSER__DEV2,
    REACT_APP_SECRET_KEY_REFERENSI__DEV2,
    REACT_APP_SECRET_KEY_ESEAL__DEV2,
    REACT_APP_SECRET_KEY_PERIJINAN__DEV2,
    REACT_APP_SECRET_KEY_RISK_ENGINE__DEV2,
    REACT_APP_SECRET_KEY_CSEARCH__DEV2,
    REACT_APP_SECRET_KEY_HDFS__DEV2,
    REACT_APP_SECRET_KEY_PFPD__DEV2,
    REACT_APP_SECRET_KEY_PERBAIKAN__DEV2,
    REACT_APP_SECRET_KEY_SIMAUDI__DEV2,
    REACT_APP_SECRET_KEY_BROWSE__DEV2,
    REACT_APP_SECRET_KEY_SURAT_KUASA__DEV2,
    REACT_APP_SECRET_KEY_AP__DEV2,

    REACT_APP_API_ALL_APIS_GW_KEY
} = process.env;

// const isUrl1 = window.location.origin === 'https://ceisa40.customs.go.id'
// const isUrl2 = window.location.origin === 'https://ceisa40-dev.customs.go.id'
// const isUrl3 = window.location.origin === 'https://ceisa40-temp.customs.go.id'
const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);
const base = {
    'https://ceisa40.customs.go.id': {
        base_api_key: 'Beacukai-Api-Key',
        base_url: REACT_APP_API_BASE_URL1,
        parser: REACT_APP_SECRET_KEY_PARSER,
        amws: REACT_APP_SECRET_KEY_AMWS,
        perijinan: REACT_APP_SECRET_KEY_PERIJINAN,
        hdfs: REACT_APP_SECRET_KEY_HDFS,
        sce_ws: REACT_APP_SECRET_KEY_SCE_WS,
        referensi: REACT_APP_SECRET_KEY_REFERENSI,
        browse_service: REACT_APP_SECRET_KEY_BROWSE,
        suratkuasa: REACT_APP_SECRET_KEY_SURAT_KUASA,
        simaudi: REACT_APP_SECRET_KEY_SIMAUDI,
        perbaikan: REACT_APP_SECRET_KEY_PERBAIKAN,
        pfpd: REACT_APP_SECRET_KEY_PFPD,
        csearch: REACT_APP_SECRET_KEY_CSEARCH,
        risk_engine: REACT_APP_SECRET_KEY_RISK_ENGINE,
        eseal: REACT_APP_SECRET_KEY_ESEAL,
        lhp: REACT_APP_SECRET_KEY_LHP,
        ap: REACT_APP_SECRET_KEY_AP,
    },
    'https://ceisa40-dev.customs.go.id': {
        base_api_key: 'Beacukai-Api-Key',
        base_url: REACT_APP_API_BASE_URL2,
        parser: REACT_APP_SECRET_KEY_PARSER__DEV,
        amws: REACT_APP_SECRET_KEY_AMWS,
        perijinan: REACT_APP_SECRET_KEY_PERIJINAN__DEV,
        hdfs: REACT_APP_SECRET_KEY_HDFS__DEV,
        sce_ws: REACT_APP_SECRET_KEY_SCE_WS,
        referensi: REACT_APP_SECRET_KEY_REFERENSI,
        browse_service: REACT_APP_SECRET_KEY_BROWSE__DEV,
        suratkuasa: REACT_APP_SECRET_KEY_SURAT_KUASA__DEV,
        simaudi: REACT_APP_SECRET_KEY_SIMAUDI__DEV,
        perbaikan: REACT_APP_SECRET_KEY_PERBAIKAN__DEV,
        pfpd: REACT_APP_SECRET_KEY_PFPD__DEV,
        csearch: REACT_APP_SECRET_KEY_CSEARCH__DEV,
        risk_engine: REACT_APP_SECRET_KEY_RISK_ENGINE__DEV,
        eseal: REACT_APP_SECRET_KEY_ESEAL__DEV,
        lhp: REACT_APP_SECRET_KEY_LHP__DEV,
        ap: REACT_APP_SECRET_KEY_AP__DEV,
    },
    'https://ceisa40-temp.customs.go.id': {
        base_api_key: 'Beacukai-Api-Key',
        base_url: REACT_APP_API_BASE_URL3,
        parser: REACT_APP_API_ALL_APIS_GW_KEY,
        amws: REACT_APP_SECRET_KEY_AMWS,
        perijinan: REACT_APP_API_ALL_APIS_GW_KEY,
        hdfs: REACT_APP_API_ALL_APIS_GW_KEY,
        sce_ws: REACT_APP_API_ALL_APIS_GW_KEY,
        referensi: REACT_APP_API_ALL_APIS_GW_KEY,
        browse_service: REACT_APP_API_ALL_APIS_GW_KEY,
        suratkuasa: REACT_APP_API_ALL_APIS_GW_KEY,
        simaudi: REACT_APP_API_ALL_APIS_GW_KEY,
        perbaikan: REACT_APP_API_ALL_APIS_GW_KEY,
        pfpd: REACT_APP_API_ALL_APIS_GW_KEY,
        csearch: REACT_APP_API_ALL_APIS_GW_KEY,
        risk_engine: REACT_APP_API_ALL_APIS_GW_KEY,
        eseal: REACT_APP_API_ALL_APIS_GW_KEY,
        lhp: REACT_APP_API_ALL_APIS_GW_KEY,
        ap: REACT_APP_API_ALL_APIS_GW_KEY,
    },
    'https://portal-temp.beacukai.go.id': {
        base_api_key: 'Beacukai-Api-Key',
        base_url: REACT_APP_API_BASE_URL4,
        parser: REACT_APP_API_ALL_APIS_GW_KEY,
        amws: REACT_APP_SECRET_KEY_AMWS,
        perijinan: REACT_APP_API_ALL_APIS_GW_KEY,
        hdfs: REACT_APP_API_ALL_APIS_GW_KEY,
        sce_ws: REACT_APP_API_ALL_APIS_GW_KEY,
        referensi: REACT_APP_API_ALL_APIS_GW_KEY,
        browse_service: REACT_APP_API_ALL_APIS_GW_KEY,
        suratkuasa: REACT_APP_API_ALL_APIS_GW_KEY,
        simaudi: REACT_APP_API_ALL_APIS_GW_KEY,
        perbaikan: REACT_APP_API_ALL_APIS_GW_KEY,
        pfpd: REACT_APP_API_ALL_APIS_GW_KEY,
        csearch: REACT_APP_API_ALL_APIS_GW_KEY,
        risk_engine: REACT_APP_API_ALL_APIS_GW_KEY,
        eseal: REACT_APP_API_ALL_APIS_GW_KEY,
        lhp: REACT_APP_API_ALL_APIS_GW_KEY,
        ap: REACT_APP_API_ALL_APIS_GW_KEY,
    },
    'localhost': {
        base_api_key: 'Beacukai-Api-Key',
        base_url: REACT_APP_API_BASE_URL1,
        parser: REACT_APP_SECRET_KEY_PARSER__DEV,
        amws: REACT_APP_SECRET_KEY_AMWS,
        perijinan: REACT_APP_SECRET_KEY_PERIJINAN__DEV,
        hdfs: REACT_APP_SECRET_KEY_HDFS__DEV,
        sce_ws: REACT_APP_SECRET_KEY_SCE_WS,
        referensi: REACT_APP_SECRET_KEY_REFERENSI,
        browse_service: REACT_APP_SECRET_KEY_BROWSE__DEV,
        suratkuasa: REACT_APP_SECRET_KEY_SURAT_KUASA__DEV,
        simaudi: REACT_APP_SECRET_KEY_SIMAUDI__DEV,
        perbaikan: REACT_APP_SECRET_KEY_PERBAIKAN__DEV,
        pfpd: REACT_APP_SECRET_KEY_PFPD__DEV,
        csearch: REACT_APP_SECRET_KEY_CSEARCH__DEV,
        risk_engine: REACT_APP_SECRET_KEY_RISK_ENGINE__DEV,
        eseal: REACT_APP_SECRET_KEY_ESEAL__DEV,
        lhp: REACT_APP_SECRET_KEY_LHP__DEV,
        ap: REACT_APP_SECRET_KEY_AP__DEV,
    }
}

const ignore_token_for_path = ['referensi', 'cms']
const ignore_apikey_for_path = ['amws']
class HttpRequest {
    getPath(uri) {
        return url
            .parse(uri)
            .pathname.replace("-", "_")
            .split("/")[1]
            .toLowerCase();
    }

    getToken(url) {
        const path = this.getPath(url);
        //
        //
        // const token = {
        //     parser: isProd ? REACT_APP_SECRET_KEY_PARSER : REACT_APP_SECRET_KEY_PARSER__DEV,
        //     amws: REACT_APP_SECRET_KEY_AMWS,
        //     perijinan: isProd ? REACT_APP_SECRET_KEY_PERIJINAN : REACT_APP_SECRET_KEY_PERIJINAN__DEV,
        //     hdfs: isProd ? REACT_APP_SECRET_KEY_HDFS : REACT_APP_SECRET_KEY_HDFS__DEV,
        //     sce_ws: REACT_APP_SECRET_KEY_SCE_WS,
        //     referensi: REACT_APP_SECRET_KEY_REFERENSI,
        //     browse_service: isProd ? REACT_APP_SECRET_KEY_BROWSE : REACT_APP_SECRET_KEY_BROWSE__DEV,
        //     suratkuasa: isProd ? REACT_APP_SECRET_KEY_SURAT_KUASA : REACT_APP_SECRET_KEY_SURAT_KUASA__DEV,
        //     simaudi: isProd ? REACT_APP_SECRET_KEY_SIMAUDI : REACT_APP_SECRET_KEY_SIMAUDI__DEV,
        //     perbaikan: isProd ? REACT_APP_SECRET_KEY_PERBAIKAN : REACT_APP_SECRET_KEY_PERBAIKAN__DEV,
        //     pfpd: isProd ? REACT_APP_SECRET_KEY_PFPD : REACT_APP_SECRET_KEY_PFPD__DEV,
        //     csearch: isProd ? REACT_APP_SECRET_KEY_CSEARCH : REACT_APP_SECRET_KEY_CSEARCH__DEV,
        //     risk_engine: isProd ? REACT_APP_SECRET_KEY_RISK_ENGINE : REACT_APP_SECRET_KEY_RISK_ENGINE__DEV,
        //     eseal: isProd ? REACT_APP_SECRET_KEY_ESEAL : REACT_APP_SECRET_KEY_ESEAL__DEV,
        //     lhp: isProd ? REACT_APP_SECRET_KEY_LHP : REACT_APP_SECRET_KEY_LHP__DEV,
        //     ap: isProd ? REACT_APP_SECRET_KEY_AP : REACT_APP_SECRET_KEY_AP__DEV,
        // };
        if (ignore_apikey_for_path.includes(path)) return {headers: {}}
        const origin = isLocalhost ? 'localhost' : window.location.origin
        return {
            headers: {
                [base[origin].base_api_key]: base[origin][path]
            }
        };
    }

    mergeRecursive(obj1, obj2) {
        if (!obj1) return obj2
        for (let p in obj2) {
            try {
                // Property in destination object set; update its value.
                if ( obj2[p].constructor===Object ) {
                    obj1[p] = this.mergeRecursive(obj1[p], obj2[p]);

                } else {
                    obj1[p] = obj2[p];

                }

            } catch(e) {
                // Property in destination object not set; create it and set its value.
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    }

    async get(resourceHttpRequest) {
        const origin = isLocalhost ? 'localhost' : window.location.origin
        const { url, config } = resourceHttpRequest
        const fix_url = base[origin].base_url + url
        const token = this.getToken(fix_url)
        const path = this.getPath(fix_url)

        let accesstToken
        if (!ignore_token_for_path.includes(path)) {
            try {
                accesstToken = await getAccessHeader()
            } catch (e) {
                accesstToken = {headers: {}}
            }
        } else {
            accesstToken = {headers: {}}
        }

        // CreateLog.set(3, {urldata: url})
        return a.get(fix_url, { ...this.mergeRecursive(this.mergeRecursive(config, token), accesstToken)})
    }

    async post(resourceHttpRequest) {
        const origin = isLocalhost ? 'localhost' : window.location.origin
        const { url, config, data } = resourceHttpRequest
        const fix_url = base[origin].base_url + url
        const token = this.getToken(fix_url)
        const path = this.getPath(fix_url)

        let accesstToken
        if (!ignore_token_for_path.includes(path)) {
            try {
                accesstToken = await getAccessHeader()
            } catch (e) {
                accesstToken = {headers: {}}
            }
        } else {
            accesstToken = {headers: {}}
        }
        // if (url !== 'https://api.beacukai.go.id/amws/v1/user-log/add') {
        //   CreateLog.set(2, {urldata: url})
        // }
        return a.post(fix_url, data, { ...this.mergeRecursive(this.mergeRecursive(config, token), accesstToken)})
    }

    async put(resourceHttpRequest) {
        const origin = isLocalhost ? 'localhost' : window.location.origin
        const { url, config, data } = resourceHttpRequest
        const fix_url = base[origin].base_url + url
        const token = this.getToken(fix_url)
        const path = this.getPath(fix_url)

        let accesstToken
        if (!ignore_token_for_path.includes(path)) {
            try {
                accesstToken = await getAccessHeader()
            } catch (e) {
                accesstToken = {headers: {}}
            }
        } else {
            accesstToken = {headers: {}}
        }

        return a.put(fix_url, data, { ...this.mergeRecursive(this.mergeRecursive(config, token), accesstToken)})
    }

    async delete(resourceHttpRequest) {
        const origin = isLocalhost ? 'localhost' : window.location.origin
        const { url, config } = resourceHttpRequest
        const fix_url = base[origin].base_url + url
        const token = this.getToken(fix_url)
        const path = this.getPath(fix_url)

        let accesstToken
        if (!ignore_token_for_path.includes(path)) {
            try {
                accesstToken = await getAccessHeader()
            } catch (e) {
                accesstToken = {headers: {}}
            }
        } else {
            accesstToken = {headers: {}}
        }
        // CreateLog.set(5, {urldata: url})
        return a.delete(fix_url, { ...this.mergeRecursive(this.mergeRecursive(config, token), accesstToken)})
    }
}

export default new HttpRequest();
