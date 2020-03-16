import axios from "axios"
import moment from "moment"

const URL =  "https://api.stackexchange.com/2.2/search/advanced?key=" + process.env.REACT_APP_API_KEY;
const site = "stackoverflow";


export async function getMostRecentQuestions(tags, page){
    const limit = 10;
    const search_query = "android";

    const params = {
        q: search_query,
        tagged: tags,
        site: site,
        sort: "creation",
        order: "desc",
        page: page,
        pagesize: limit,
        filter : "withbody"
    };

    return  await axios.get(URL, {params} )
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
        pagesize: limit,
        filter: "withbody"
    };

    return await axios.get(URL, {params} )

}