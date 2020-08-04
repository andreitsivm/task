import {useCallback, useState} from "react";
import axios from "axios"



export const useRequest = () => {
    const baseURL=`https://frontend-test-assignment-api.abz.agency/api/v1/`

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [token,setToken]=useState('')

    const request=useCallback(async (url,method='GET',data=null,headers={})=>{
        try{
            setLoading(true)
            const response= await axios({
                url: `${baseURL}${url}`,
                method: method,
                data: data,
                headers: headers
            })
            const data= response.data
            setLoading(false)

            return data

        }catch (e) {
            setLoading(false)
            setError(e.message)
            throw  e
        }


    },[])

    const clearError=useCallback(()=>{
        setError(null)
    },[])
    return {loading,request,error,clearError}
}