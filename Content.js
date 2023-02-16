


function Content() {

    const { useState } = React
    const [data, setData] = useState({})
    const [allData, setAllData] = useState([])
    const [edit, setEdit] = useState(Input)
    const [updateId, setUpdateId] = useState(null)
    const [index, setIndex] = useState('')

    const Input = [
        {
            name: 'OnBoarding call',
        },
        {
            name: 'Google Search Console Access',
           
        },
        {
            name: 'Google Analytics Access',
           
        },
        {
            name: 'Website Access',
           
        },
        {
            name: 'Technical Audit',
        
        },
        {
            name: 'Anchor Text Semantic Analysis',
        
        },
        {
            name: 'Competitor Analysis',
        
        },
        {
            name: 'Anchor Text/URL Mapping',
        
        },
        {
            name: 'Google Data Studio Report + Local Reporting Suite',
        
        },
        {
            name: 'Site Level Optimization',
        },
        {
            name : 'On Page Optimisation',
           
    },
        {
            name: 'Content Creation',
           
        },
        {
            name: 'Content Publishing',
           
        },
        {
            name: 'Premium Press Release',
           
        },
        {
            name: 'Authority Niche Placements',
           
        },
        {
            name: 'Review Management',
           
        },
        {
            name: 'Index Links',
           
        },
        {
            name: 'Vedio Recamp',
        }
    ]


    function sentValue(value, name, e) {
        let Arr = {}
        Arr[name] = value
        setData({ ...data, ...Arr })
    }


    function submitForm(e) {
        e.preventDefault()

        console.log(data)
        setAllData([...allData, data])
        console.log(data)
    }
    console.log(data)

    function handleEdit(e, I) {
        setUpdateId(I)
        setEdit(e)
        setIndex(I)

    }

    function handleEditForm(name, value) {
        let editData = {}
        editData[name] = value
        setEdit({ ...edit, ...editData })

    }


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
        console.log(e)
        let newdata = [...allData]
        newdata[index] = edit
        setAllData(newdata)

        // setData({})
        setUpdateId(null)
        postData()
        console.log('helo', edit)

    }

    function handleDelete(e, I) {
        let newdata = allData.filter((data, i) => i !== I)
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
                                        <input required type="text" name={e.name} value={data[e.name]} id={e.name} placeholder = 'Enter..' onChange={(E) => sentValue(E.target.value, e.name, e)} />
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
                                        <React.Fragment>

                                            {
                                                i == updateId ?

                                                    <tr>
                                                        {
                                                            Input.map((e) =>
                                                                <td><input type="text" name={e.name} id="editInput" value={edit[e.name]} onChange={(E) => handleEditForm(e.name, E.target.value)} /></td>
                                                            )
                                                        }
                                                        <td>
                                                            <button type='submit'>Save</button>
                                                        </td>
                                                    </tr>


                                                    :

                                                    <tr>
                                                        <td>{e['OnBoarding call']}</td>
                                                        <td>{e['Google Search Console Access']}</td>
                                                        <td>{e['Google Analytics Access']}</td>
                                                        <td>{e['Website Access']}</td>
                                                        <td>{e['Technical Audit']}</td>
                                                        <td>{e['Anchor Text Semantic Analysis']}</td>
                                                        <td>{e['Competitor Analysis']}</td>
                                                        <td>{e['Anchor Text/URL Mapping']}</td>
                                                        <td>{e['Google Data Studio Report + Local Reporting Suite']}</td>
                                                        <td>{e['Site Level Optimization']}</td>
                                                        <td>{e['On Page Optimisation']}</td>
                                                        <td>{e['Content Creation']}</td>
                                                        <td>{e['Content Publishing']}</td>
                                                        <td>{e['Premium Press Release']}</td>
                                                        <td>{e['Authority Niche Placements']}</td>
                                                        <td>{e['Review Management']}</td>
                                                        <td>{e['Index Links']}</td>
                                                        <td>{e['Vedio Recamp']}</td>
                                                        <td><button className='btn' onClick={() => handleEdit(e, i)}>Edit</button>
                                                            <button className='btn' onClick={() => handleDelete(e, i)}>Delete</button></td>
                                                    </tr>
                                            }
                                        </React.Fragment>


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

ReactDOM.render(<Content />, document.querySelector('.box'))