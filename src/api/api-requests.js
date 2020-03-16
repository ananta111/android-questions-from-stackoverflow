import axios from "axios"
import moment from "moment"

const URL =  "https://api.stackexchange.com/2.2/search/advanced?key=" + process.env.REACT_APP_API_KEY; //API KEY from stack exchange [rate limiting enforced]
const site = "stackoverflow";
const limit = 10;
const search_query = "android";


export async function getMostRecentQuestions(tags, page, is_accepted){

    let params = {
        q: search_query,
        tagged: tags,
        site: site,
        sort: "creation",
        order: "desc",
        page: page,
        pagesize: limit,
        filter : "withbody",
    };

    if (is_accepted){
        params.accepted = true;
    }

    return  await axios.get(URL, {params} )
}


export async function getMostVotedQuestions(tags, page, is_accepted){

    let toDate = moment().unix();
    let fromDate = moment().subtract(1, "week").unix();

    let params = {
        q: search_query,
        tagged: tags,
        site: site,
        todate: toDate,
        fromdate: fromDate,
        sort: "votes",
        order: "desc",
        page: page,
        pagesize: limit,
        filter: "withbody",
    };

    if (is_accepted){
        params.accepted = true;
    }

    return await axios.get(URL, {params} )

}