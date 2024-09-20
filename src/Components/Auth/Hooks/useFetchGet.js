import { useEffect } from "react";

export function GetAllFetch(url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
            }, [url]);
            return { data, loading }
}