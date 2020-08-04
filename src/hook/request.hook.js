import {useCallback, useState} from "react";



export const useRequest = () => {
    const baseURL=`https://frontend-test-assignment-api.abz.agency/api/v1/`

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [token,setToken]=useState('')

    const request=useCallback(async (url,method='GET',body=null,headers={})=>{
        try{
            if(body){
                body=JSON.stringify(body)
                headers['Content-Type']='application/json'
            }
            setLoading(true)
            const response= await fetch(baseURL+url,{method,body,headers})
            const data=await response.json()
            if(!response.ok){
                throw new Error(data.message||'Request fallen')
            }
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