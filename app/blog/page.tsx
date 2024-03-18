'use client'
import { useEffect } from "react"

export default function Blog(){
    useEffect(() => {
        const data = fetch("http://localhost:7005/items/Blog_Post")
    },[])

    return(
        <div>
            <p>This is my blog</p>
            <div>Item 1</div>
            <div>Item 2</div>
        </div>
    )
}