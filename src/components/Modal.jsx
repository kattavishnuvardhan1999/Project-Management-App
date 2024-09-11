import { createPortal } from "react-dom";
import { forwardRef,useImperativeHandle } from "react";
import { useRef } from "react";

const Modal= forwardRef( function Modal({childern},ref){
    const dialog = useRef();

    useImperativeHandle(ref,()=>{
        return {
            open(){
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <div>
            <dialog className="dialog-modal" ref={dialog}>
            {childern}
            <h2>Invalid Input</h2>
 
            <form action="" method="dialog">
                <button>Close</button>
            </form>
        </dialog>
        </div>,document.getElementById('modal-root')
       );
});

export default Modal;