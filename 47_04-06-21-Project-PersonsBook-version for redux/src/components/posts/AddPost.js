import React, {useContext, useState} from 'react'
import {GlobalContext} from "../App";

const AddPost = ({onFinish}) => {
    const {activePerson} = useContext(GlobalContext)

    const [formData, setFormData] = useState({
        personId: activePerson,
        title: '',
        short: '',
        body: '',
    })

    const changeFieldHandle = (event) => {
        // console.log(event.target.value)
        setFormData({
            ...formData, [event.target.name]: event.target.value
        })
    }

    return (
        <form onSubmit={() => {
            onFinish(formData)
        }}>
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" name="title" onChange={changeFieldHandle}/>
            </div>
            <div className="form-group">
                <label>Short Text</label>
                <textarea className="form-control" name="short" onChange={changeFieldHandle}/>
            </div>
            <div className="form-group mb-2">
                <label>Post text</label>
                <textarea className="form-control" name="body" onChange={changeFieldHandle}/>
            </div>
            {/*//ToDO: спросить про onFinish*/}
            <button type="submit">Add Post</button>
        </form>
    )
}

export default AddPost