import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicod.com/posts/1')
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch(error => {
                setLoading(false)
                setPost({})
                setError('Something went Wrong!')
            })

        switch(action.type) {
            case 'FETCH_SUCCESS' :
                return {
                    loading : false,
                    post: action.payload,
                    error: ''
                }
            case 'FETCH_ERROR' :
                return {
                    loading: false,
                    post: {},
                    error: 'Something went Wrong!'
                }
            default :
                return state
            }
    }, [])

    return (
        <div>
            {loading ? 'Loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne
