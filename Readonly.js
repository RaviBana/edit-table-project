export function Readonly({e, HandleEdit,HandleDelete,I}){
    // console.log('ee',e)
  return (
    <>
    <tr>
                                          <td>{e?.['OnBoarding call']}</td>
                                            <td>{e?.['Google Search Console Access']}</td>
                                            <td>{e?.['Google Analytics Access']}</td>
                                            <td>{e?.['Website Access']}</td>
                                            <td>{e?.['Technical Audit']}</td>
                                            <td>{e?.['Anchor Text Semantic Analysis']}</td>
                                            <td>{e?.['Competitor Analysis']}</td>
                                            <td>{e?.['Anchor Text/URL Mapping']}</td>
                                            <td>{e?.['Google Data Studio Report + Local Reporting Suite']}</td>
                                            <td>{e?.['Site Level Optimization']}</td>
                                            <td>{e?.['On Page Optimisation']}</td>
                                            <td>{e?.['Content Creation']}</td>
                                            <td>{e?.['Content Publishing']}</td>
                                            <td>{e?.['Premium Press Release']}</td>
                                            <td>{e?.['Authority Niche Placements']}</td>
                                            <td>{e?.['Review Management']}</td>
                                            <td>{e?.['Index Links']}</td>
                                            <td>{e?.['Vedio Recamp']}</td> 
                                           <td><button className='btn' onClick={()=>HandleEdit(e,I)}>Edit</button> 
                                           <button className='btn' onClick={()=>HandleDelete(e,I)}>Delete</button></td>
                                        </tr>                   
    </>
  )
}
