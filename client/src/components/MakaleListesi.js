/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import {Link} from 'react-router-dom';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const MAKALELER_GETIR = gql`
    {
        makalelerGetir{
            id,
            baslik,
            icerik
        }
    }
`;

function MakaleListesi() {

    const {data, loading, error} = useQuery(MAKALELER_GETIR);
    let makaleTemp;
    if(loading){
        makaleTemp = 
        <div>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="d-grid gap-2 col-6 mx-auto bg-warning mt-5">
                        <p>Makaleler Yükleniyor...</p>
                    </div>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </div>
            </div>
        </div>;
        return loading;
    }else if(error){
        console.log(error)
    }
    return (
        <div>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="d-grid gap-2 col-6 mx-auto bg-warning mt-5">
                        <ul className="list-group-flush me-2">
                            {makaleTemp = data.makalelerGetir.map((makale) => {
                                return(
                                    <div key={makale.id}>
                                        <li className="list-group-item mt-4 me-3 bg-dark text-center text-white fw-bold fs-5">
                                            <Link to={`/makale/${makale.id}`}>{makale.baslik}</Link>
                                        </li>
                                        <li className="list-group-item mt-1 mb-3 me-3 bg-dark text-white fw-bold">{makale.icerik}</li>
                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>
    )
}

export default MakaleListesi;