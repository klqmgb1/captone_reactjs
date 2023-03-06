import React, { useEffect } from "react";
// import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { fectDetailMovie } from "./duck/action";
import Loader from "../../../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import HomePages from "./renderDetail/HomePage";
// import {connect} from 'react-redux'

export default function DetailMoviePage() {
  const loading = useSelector((state) => state.detailMovieReducer.loading);
  const data = useSelector((state) => state.detailMovieReducer.data);
  const dispatch = useDispatch();

  const params = useParams();
  useEffect(() => {
    // props.fectDetailMovie(params.id)
    dispatch(fectDetailMovie(params.id));
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="container">
      <div className="d-flex details_css">
        <img className="details-css" src={data && data.hinhAnh} alt="" />
        <div className="container details_content">
          <h2>{data && data.tenPhim}</h2>
          <h4>Đánh giá: {data && data.danhGia}/10</h4>
          <h6>Ngày khởi chiếu: {data && data.ngayKhoiChieu}</h6>
          <span>{data && data.moTa}</span>
          <br />
          <br />
          <div className="d-flex">
            <button
              className="btn btn-success mx-4"
              href={data && data.trailer}
            >
              <a href={data && data.trailer} target="_blank" style={{color: 'white'}}>
                Xem Trailer
              </a>
            </button>
            <button className="btn btn-success">Mua Vé Ngay</button>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <HomePages />
      </div>
    </div>
  );
}

