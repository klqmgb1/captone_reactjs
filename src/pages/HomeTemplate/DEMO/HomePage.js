import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Spiner from '../../../components/Loader/sniper/Spiner';
import { apiTheater, apiTheaterDetailShowing, filmApi } from './apiHome';
import FilmOnTheater from './FilmOnTheater';
import Theater from './Theater';
import TheaterDetail from './TheaterDetail';

const HomePage = () => {
    //TODO: Khai báo dữ liệu
    const refToScroll = React.createRef()
    const [theaterCode, setTheaterCode] = useState('CGV')
    const [film, setFilm] = useState({
        loading: false,
        data: null,
        error: true,
    })
    const [theater, setTheater] = useState({
        loading: false,
        data: null,
        error: true,
    })
    const [theaterDetail, setTheaterDetail] = useState({
        loading: false,
        data: null,
        error: true,
    })
    const [filmDetail, setFilmDetail] = useState({
        loading: false,
        data: null,
        error: true,
    })
    useEffect(() => {
        setTheaterDetail({
            ...theaterDetail,
            loading: true,
            data: null,
        })
        apiTheaterDetailShowing(theaterCode)
            .then((res) => {
                setTheaterDetail({
                    ...theaterDetail,
                    loading: false,
                    data: res.data.content[0],
                })
                setFilmDetail({
                    ...filmDetail,
                    data: res.data.content[0].lstCumRap[0],
                })
            })
            .catch((error) => {
            })
    }, [theaterCode])
    
    useEffect(() => {
        setFilm({
            ...film,
            loading: true,
        })
        setTheater({
            ...theater,
            loading: true,
        })
        setTheaterDetail({
            ...theaterDetail,
            loading: true,
        })
        filmApi
            .then((res) => {
                setFilm({
                    ...film,
                    loading: false,
                    data: res.data.content,
                    error: false,
                })
            })
            .catch((error) => {
                setFilm({
                    ...film,
                    loading: true,
                    data: null,
                    error: true,
                })
            })
        apiTheater
            .then((res) => {
                setTheater({
                    ...theater,
                    loading: false,
                    data: res.data.content,
                    error: false,
                })
            })
            .catch((error) => {
                setTheater({
                    ...theater,
                    loading: true,
                    data: null,
                    error: true,
                })
            })
    }, [])

    const renderTheater = () => {
        if (theater.data) {
            return theater.data.map((theater, index) => {
                return (
                    <div key={index} className="col-2 col-md-12 p-0">
                        <Theater theater={theater} handelTheaterOnClick={handelTheaterOnClick} />
                    </div>
                )
            })
        }
    }
    const renderTheaterDetail = () => {
        if (theaterDetail.data) {
            return theaterDetail.data.lstCumRap.map((theaterDetail, index) => {
                   
                return (
                    <TheaterDetail key={index} theaterDetail={theaterDetail} scroll={handelScrollIntoView} handelTheaterDetailOnClick={handelTheaterDetailOnClick} />
                )
            })
        }
    }
    const renderFilmOnTheater = () => {
        if (filmDetail.data && filmDetail.data.danhSachPhim.length > 0) {
            return filmDetail.data.danhSachPhim.map((filmOnTheater, index) => {
                return <FilmOnTheater key={index} filmOnTheater={filmOnTheater} />

            })
        }
    }
    const handelScrollIntoView = () => {
        refToScroll.current.scrollIntoView()
    }
    const handelTheaterDetailOnClick = (itemClicked) => {
        setFilmDetail({
            ...filmDetail,
            data: itemClicked,
        })
    }
    const handelTheaterOnClick = (itemClicked) => {
        setTheaterCode(itemClicked)
    }
    return (
        <>
            <div className='container' >
    
                <div className="container mt-2">
                    <div className='row'>
                        <div className='col-md-2 p-sm-0 ' >
                            {/* loading ripple */}
                            
                            {theater.loading ? <Spiner/>: ''}
                            <div className="row container" style={{ maxHeight: '80vh', overflow: 'scroll' }}>
                                {renderTheater()}
                            </div>
                        </div>
                        <div className='col-md-10'>
                            <div className="d-flex justify-content-center" >
                                {/* loading ripple */}
                                {theaterDetail.loading ? <Spiner/> : ''}
                            </div>
                            <div className="row" >
                                <div className='col-md-4' style={{ maxHeight: '80vh', overflow: 'scroll' }}>
                                    {renderTheaterDetail()}
                                </div>
                                <div ref={refToScroll} className='col-md-8' style={{ maxHeight: '80vh', overflow: 'scroll' }}>
                                    {renderFilmOnTheater()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HomePage;




    