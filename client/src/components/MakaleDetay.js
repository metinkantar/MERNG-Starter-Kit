/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

const MAKALE_GETIR = gql`
    query makaleGetir($id:ID!){
        makaleGetir(id:$id){
            id,
            baslik,
            icerik
        }
    }
`;
const MAKALE_SIL = gql`
     mutation makaleSil($id:ID!){
        makaleSil(id:$id)
    }   
`;

function MakaleDetay(props) {
  let id = props.match.params.id;
  const { data, loading, error } = useQuery(MAKALE_GETIR, {
    variables: { id }
  });

  const [silMakale] = useMutation(MAKALE_SIL);
  const onClick = () => {
    //console.log(id)
    silMakale({variables:{id}});
    window.location = '/';
  };

  return (
    <div>
      <div className="container-fluid bg-dark">
        <div className="row">
          <div className="d-grid gap-2 col-6 mx-auto bg-warning mt-5">
            {
                data && (
                    <ul className="list-group-flush me-2">
                        <li className="list-group-item mt-4 me-3 bg-dark text-center text-white fw-bold fs-5">{data.makaleGetir.baslik}</li>
                        <li className="list-group-item mt-1 mb-3 me-3 bg-dark text-white fw-bold">{data.makaleGetir.icerik}</li>
                        <div className="d-flex d-grid gap-2 col-3 mx-auto bg-warning">
                            <a className="sil btn btn-success justify-align-between">Güncelle</a>
                            <a onClick={onClick} className="sil btn btn-danger">Sil</a>
                        </div>
                        
                    </ul>
                )
            }
          </div>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /><br /><br /><br /> <br /><br />
      </div>
    </div>
  );
}

export default MakaleDetay;
