import React from "react";
import Navbar from "modules/header/navbar";
import DashUser from "./components/dashUser";

import instance from "services/axios";
import { useNavigate } from "react-router-dom";

export default class DashBoard extends React.Component {

    changeColorOfNavItem = () => {
        const items = document.querySelectorAll('.nav__item')
        // console.log(items)
        for (const item of items) {
            const element = item.querySelector('a') as HTMLElement
            element.classList.remove('border')
        }
    }

    handleSubmit = (e : any) => {
        e.preventDefault()
        const element = document.querySelector('.Blog__Create');
        const authorInput = element?.querySelector('.Post__Author') as HTMLInputElement
        const contentInput = element?.querySelector('.Post__Content') as HTMLInputElement
        console.log('element: ', e, ' author: ', authorInput.value, ' content: ', contentInput.value)
        const data = {
            author: authorInput.value,
            content: contentInput.value
        }
        console.log('submitting  with data:  ', data)
        instance
            .post('/api/blog/createBlog', data )
            .then((res) => {
                if (res.status == 200) {
                prompt('create blog success')
                const navigate = useNavigate()
                navigate("/dashboard")
                }
            })
            .catch((err) => {
                console.log('error when submit blog: ', err)
            })
    }

    componentDidMount(): void {
        this.changeColorOfNavItem()
    }

   render () {
    return (
        <div className="dashboard">
            <div className="nav bg-green-500 flex justify-between">
                <Navbar/>
                <DashUser/>
            </div>
            <div className="Blog__Create mt-4 ">
                <label htmlFor="author">Author: </label>
                <input type="text" className="Post__Author ml-8 w-40 h-6 border border-gray-300 rounded" />
                <div/>
                <label htmlFor="content">Content:</label>
                <input type="text"  className="Post__Content ml-8 w-40 h-6 mt-4  border border-gray-300 rounded"/>
                <div/>
                <button type="submit" className="mt-5 ml-8 border border-blue-500 bg-green-300" onClick={(e) => this.handleSubmit(e)}>Submit</button>
            </div>
        </div>
        
    )
   }
}