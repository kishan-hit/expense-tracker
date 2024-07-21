import React, { useState } from "react";
import Modal from "react-modal";
import AddBankModal from "./AddBankModal";
import UploadFileModal from "./UploadFileModal";

const ShowModal = (props) => {
    const [uploadFileModal, setUploadFileModal] = useState(false);
    const [bankDetail, setBankDetail] = useState({
        image: "",
        name: ""
    })
    function closeModal() {
        props.setShowModal(false);
        document.body.classList.remove('modal-open');
    }

    function afterOpenModal() {
        document.body.classList.add('modal-open');
    }

    const customStyles = {
        content: {
            top: 'auto',
            left: '50%',
            right: 'auto',
            bottom: '0px',
            transform: 'translate(-50%, 0)',
            padding: 0,
            border: 0,
            backgroundColor: '#F2F3F9',
            borderRadius: "28px 28px 0 0"
        },
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.60)'
        }
    };

    return (
        <div>
            <Modal
                isOpen={props.showModal}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="h-[486px] w-[640px] p-3">
                    <div className="flex flex-col items-center">
                        <div className="h-[4px] w-[32px] rounded-[100px] bg-[#72777F] hover:cursor-pointer"
                            onClick={closeModal}>
                        </div>
                    </div>
                    {
                        uploadFileModal ?
                            <UploadFileModal bankDetail={bankDetail} closeModal={closeModal} /> :
                            <AddBankModal setBankDetail={setBankDetail} setUploadFileModal={setUploadFileModal} />
                    }
                </div>
            </Modal>
        </div>
    );
}

export default ShowModal;
