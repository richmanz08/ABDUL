


const BlogList = ({blogs,handleDelete}) => {


    return(
        <div className='container-Boxitem' >
            {blogs &&
              blogs.map((item, index) => (
                <div className="Boxitem" key={item.id} > 
                <div className="row1">
                <div className="items-mode">{item.mode}</div>
                  <div className="items-Image">{item.icons}</div></div>
                  <div className="items-TOPIC">{item.topic}</div>
                  
                 
                  <div className="row4">
                    <div className="items-date">คุณโพสต์เมื่อ {item.date}</div>
                  <button className="Button-delete" onClick={()=>handleDelete(item.id)}>ลบโพสต์</button>
                </div></div>
              ))}
        </div>
    )
}
export default BlogList