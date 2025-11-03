import React from 'react'

function AboutUs({data}) {
  const products=[
    {pid:100,pName:'apple',band:'5g',price:120000,display:'led'},
    {pid:101,pName:'samsaung',band:'5g',price:45000,display:'led'},
    {pid:102,pName:'blackberry',band:'4g',price:50000,display:'led'},
    {pid:103,pName:'nokia',band:'3g',price:1200,display:'lcd'},
    {pid:104,pName:'motorola',band:'4g',price:10000,display:'lcd'}
]
  return (
    <>
    <h1>AboutUs</h1>
    <h3>
      {data?data:<p>No Data from parent</p>}
    </h3>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, mollitia? Iusto dolor a placeat voluptates accusamus tenetur officiis animi laudantium voluptatem aperiam doloribus quod veniam, vero nulla ipsa tempora minima.
    Sequi, voluptatibus non aut illo suscipit dolor nemo magnam eos recusandae at aliquid vel et distinctio molestias accusamus nam quia, atque architecto ullam maxime eius officiis alias ipsa! Eveniet, quisquam.
    Veniam corporis et minima eligendi unde quisquam pariatur quis odit ad qui doloribus, cumque dicta numquam provident! Blanditiis quas rem, ducimus eveniet sunt minima commodi aspernatur facilis excepturi, quae accusantium.
    Molestias accusantium numquam exercitationem, temporibus laboriosam tenetur eaque, distinctio in ad amet officia odit dignissimos reprehenderit ullam sed fuga iusto voluptatem itaque ducimus totam repellat. Tenetur aliquam doloribus quo optio?
    Quam quae aliquid nostrum praesentium totam adipisci repellendus accusamus iure animi laudantium eos, neque, earum officia consequatur recusandae repudiandae itaque optio rem sit eveniet ut quisquam ipsam! Veniam, id saepe!
    Commodi quod delectus, nemo dolorum aliquam eum debitis ad? Ipsa qui odio dolores libero quaerat iste tempore deserunt itaque ab nam incidunt, dicta, veritatis voluptatum? Ratione nulla nobis eos recusandae.</p>
    <div className='my-5'>
      <table className='table border '>
        <thead>
          <tr>
            <th>Sl.No</th>
            <th>ID</th>
            <th>Name</th>
            <th>Band</th>
            <th>Price</th>
            <th>Display</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((item,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.pid}</td>
                <td>{item.pName}</td>
                <td>{item.band}</td>
                <td>{item.price}</td>
                <td>{item.display}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
    </>

  )
}

export default AboutUs