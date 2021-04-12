import React, { useState } from 'react';
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const MAKALE_EKLE = gql`
mutation makaleEkle($baslik:String!,$icerik:String!){
    makaleOlustur(baslik:$baslik, icerik:$icerik){
        id,baslik,icerik
    }
}`;

function MakaleEkle() {
    const [veriler, setVeriler] = useState({
        baslik:'',
        icerik:''
    });
    // eslint-disable-next-line no-unused-vars
    const [makaleEkle, {loading}] = useMutation(MAKALE_EKLE,{
        update(proxy, result){
            console.log(result);
        },
        variables:veriler
    });
    const onChange = (e) => {
        setVeriler({...veriler,[e.target.name]:e.target.value})
    }
    const onSubmit = (e) => {
        e.preventDefault();
        //console.log(veriler);
        makaleEkle();
        window.location = '/';
    }
    return (
        <div>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="d-grid gap-2 col-6 mx-auto bg-warning mt-5">
                        <form onSubmit={onSubmit} action="" method="">
                            <div className="form-floating mt-4 mb-3">
                                <input type="text" className="form-control" name="baslik" onChange={onChange} aria-label="baslik" />
                                <label htmlFor="floatingInputGrid">Başlık</label>
                            </div>
                            <div className="form-floating mb-2">
                                <textarea className="form-control" name="icerik" onChange={onChange} id="floatingTextarea" style={{height:"100px"}}></textarea>
                                <label htmlFor="floatingTextarea">İçerik</label>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button className="btn btn-danger mt-3 mb-4">Kaydet</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    )
}

export default MakaleEkle;