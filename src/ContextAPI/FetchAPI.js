import axios from "axios"
import { useEffect } from "react"
import { useStateValue } from "./ContextApi"
import { CANADIAN_API, RAPID_API, VACCINE_NEWS } from "./Reducer"

function FetchAPI() {
    const [state, dispatch] = useStateValue()
    console.log(state)
    useEffect(() => {
       
        const canadianApi =async () =>{
            try {
                const {data:{summary}} = await axios.get('https://api.opencovid.ca/')
                console.log(summary)
                dispatch({
                    type: CANADIAN_API,
                    payload: summary
                })
             } catch (error) {
                 console.log(error)
             }
        }
        canadianApi()

        const ApprovedVaccine = async() => {
            const options = {
                method: 'GET',
                url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/vaccines/get-fda-approved-vaccines',
                headers: {
                  'x-rapidapi-key': '83ec61f255msha7b65f8f87dbb13p1073b8jsn22f28570ad40',
                  'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
                }
              };
              
              await axios.request(options).then(function (response) {
                dispatch({
                    type: RAPID_API,
                    payload: response.data,
                })
                  console.log(response.data);
              }).catch(function (error) {
                  console.error(error);
              });
        }
        ApprovedVaccine()

        const VaccineNews = async () => {
            const options = {
            method: 'GET',
            url: 'https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/news/get-vaccine-news/0',
            headers: {
                'x-rapidapi-key': '83ec61f255msha7b65f8f87dbb13p1073b8jsn22f28570ad40',
                'x-rapidapi-host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
            }
            };

            await axios.request(options).then(function (response) {
                dispatch({
                    type: VACCINE_NEWS,
                    payload: response.data.news,
                })
                console.log(response.data.news);
            }).catch(function (error) {
                console.error(error);
            });
        }

        VaccineNews()
            
    }, [dispatch])

    
}

export default FetchAPI
