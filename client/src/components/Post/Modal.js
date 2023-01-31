import React,{useState} from 'react'
import classes from './Modal.module.css'
import ReactDOM  from 'react-dom'
import { useUpdateBlogMutation } from './postSlice'

const Backdrop = props =>{
    return <div className={classes.backdrop} />
}
 const ModalOverlay = props =>{
    const [updateBlog] = useUpdateBlogMutation()
    const [blogInput,setBlogInput] = useState('')

    const updateHandler = (e)=>{
e.preventDefault()
updateBlog({title:blogInput})

console.log(props.id)
    }
    return <div className={classes.modal} >
        <div className={classes.content} >{props.children}</div>
        <label id='blog-form'>Change Blog</label>
        <input id='blog-form' onChange={(e)=>setBlogInput(e.target.value)} />
        <button onClick={updateHandler} >Update blog</button>
    </div>
}

const portalElement = document.getElementById('overlays')
const Modal = props => {
   
   
  return(
   <>
    {ReactDOM.createPortal(<Backdrop/>,portalElement)}
    {ReactDOM.createPortal(<ModalOverlay  >{props.children}</ModalOverlay>,
    portalElement)},
 
   </>
  )
}

export default Modal