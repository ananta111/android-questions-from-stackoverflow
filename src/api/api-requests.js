import axios from "axios"
import moment from "moment"

const URL =  "https://api.stackexchange.com/2.2/search/advanced";
const site = "stackoverflow"

export async function getMostRecentQuestions(tags, page){
    const limit = 10;
    const search_query = "android";
    let toDate = moment().unix();
    let fromDate = moment().subtract(1, "week").unix();

    const params = {
        q: search_query,
        tagged: tags,
        site: site,
        todate: toDate,
        fromdate: fromDate,
        sort: "creation",
        order: "desc",
        page: page,
        pagesize: 10
    };

    return await axios.get(URL, {params} )
}


export async function getMostVotedQuestions(tags, page){

    const limit = 10;
    const search_query = "android";
    let toDate = moment().unix();
    let fromDate = moment().subtract(1, "week").unix();

    const params = {
        q: search_query,
        tagged: tags,
        site: site,
        todate: toDate,
        fromdate: fromDate,
        sort: "votes",
        order: "desc",
        page: page,
        pagesize: 10
    };

    return await axios.get(URL, {params} )

}