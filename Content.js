// 'use strict';

// const e = React.createElement;

import  React, { useState } from "react";
import { Input, value } from "./Object";
import './Iwcn.css';
import { Readonly } from "./Readonly";
import {Editrow} from "./Editrow";


function Content() {

    const [useState] = React
    // let Input = new Input()
    // const Readonly = require("./Readonly")
    // const Editrow = require("./Editrow")

    const [data, setData] = useState({})
    const [allData, setAllData] = useState([])
    const [edit, setEdit] = useState(Input)
    const [updateId, setUpdateId] = useState(null)
    const [index, setIndex] = useState('')


    function sentValue(value, name, e) {
        let Arr = {}
        // Arr[i] = {}
        Arr[name] = value
        // Arr[i] = value
        // console.log('arr', Arr)
        setData({ ...data, ...Arr })

        // console.log(data)
        // console.log(Object.values(data))

    }
    // console.log(data)

    function submitForm(e) {
        e.preventDefault()
        // let array = Object.values(data)
        console.log(data)
        setAllData([...allData, data])
        // let newObj = {}
        // setData(newObj)
        console.log(data)
    }
    console.log(data)

    function handleEdit(e, I) {
        // console.log('e',e,I)
        // console.log(I)
        setUpdateId(I)
        setEdit(e)
        setIndex(I)
        // let index = allData.findIndex((data) => data == edit)
        // console.log(index) 

    }

    function handleEditForm(name, value) {
        // console.log('obj', name, value)
        let editData = {}
        // Arr[i] = {}
        editData[name] = value

        // Arr[i] = value
        // console.log('edit', editData)

        // setUpdatedData({...updatedData, ...edit ,...editData })
        // console.log('obj', updatedData)
        setEdit({ ...edit, ...editData })
        // console.log('edi', edit)
    }
    // console.log('edi', edit)

    async function postData() {
        alert('Data is Ready to post', edit)

        let data = fetch('https:/localhost/:3000', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(edit)
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))


    }

    function submitEditedForm(e) {
        e.preventDefault()
        //  let index = allData.findIndex((data) => data == edit)
        console.log(e)
        let newdata = [...allData]
        newdata[index] = edit
        setAllData(newdata)

        setUpdateId(null)
        postData()
        console.log('helo', edit)

    }

    function handleDelete(e, I) {
        let newdata = allData.filter((data) => data !== e)
        setAllData(newdata)
    }




    return (
        <div id="bodyy">
            <div id="header"> Table Project</div>
            <div id="formm">
                <div id="formview">

                    <form action="" onSubmit={submitForm}>
                        {

                            Input.map((e, i) => {
                                console.log('render', data)
                                return (

                                    <div id="formInput">
                                        <label htmlFor={e.name} id='label'>{e.name} :-</label>
                                        <input type="text" name={e.name} value={data[e.name]} id={e.name} onChange={(E) => sentValue(E.target.value, e.name, e)} />
                                    </div>

                                )
                            })
                        }

                        <input type="submit" value="Add To List" id="submit" />
                    </form>
                </div>


                <form onSubmit={submitEditedForm} id='formtable'>

                    <table class="table">
                        <thead>
                            <tr>

                                {
                                    Input.map((e) => {
                                        return (

                                            <th>{e.name}</th>

                                        )
                                    })
                                }
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>

                            {


                                allData.map((e, i) => {
                                    return (
                                        <tr>

                                            {
                                                i == updateId ? <Editrow AllData={Input} editForm={handleEditForm} edit={edit} /> : <Readonly e={e} HandleEdit={handleEdit} I={i} HandleDelete={handleDelete} />
                                            }
                                        </tr>


                                    )
                                })
                            }



                        </tbody>
                    </table>
                </form>
            </div>



        </div>
    )


}

ReactDOM.render(
    <div>
        <Content />
        <Editrow />
        <Readonly/>
    </div>
    , document.querySelector('.box'))