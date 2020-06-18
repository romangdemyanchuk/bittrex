import React, {useEffect, useState} from 'react';
import './table.css';
import SearchByName from "../SearchByName/SearchByName";
import NomicsApiService from "../../services/nomics-service";
import Pagination from "@material-ui/lab/Pagination";
import TableCategories from "../Table/TableCategories"
import Preloader from "../Preloader/preloader";

const Table = (props) => {

    const nomicsapiService = new NomicsApiService();
    const [pagesCount, setPagesCount] = useState(null);
    const [invariableData, setInvariableData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageSize] = useState(40);
    const [currentPage, setCurrentPage] = useState(1);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        tableDataRequest()
    }, []);

    const tableDataRequest = () =>  {
        nomicsapiService.getData(props.tableName)
            .then((tableData) => {
                setLoading(false);
                setTableData(tableData);
                setInvariableData(tableData);
                setPagesCount(Math.ceil(tableData.length/pageSize));
            });
    };
    const handleChange = (event, value) => {
        setPagesCount(Math.ceil(tableData.length/pageSize));
        setCurrentPage(value);
    };
    const slicePages = (value) => {
        const currPage = (currentPage ? currentPage - 1 : 0);
        return value.slice(currPage*pageSize, currPage*pageSize + pageSize)
    };
    const onSearchChange = (term) => {
        if(term.length === 0) {
            setPagesCount(Math.ceil(invariableData/pageSize));
        }
        let temp = invariableData.filter((item) =>{
            return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
        setTableData(temp);
        setPagesCount(Math.ceil(temp.length/pageSize));
        setCurrentPage(1);
        slicePages(temp);
    };
        const spinner = loading ? <Preloader/> : null;
        const list = tableData.length === 0 ? [] : slicePages(tableData);
        const markets = list.map((item) => {
            return (
                <div key={item.id}>{item.name}</div>
            );
        });
        const currency = list.map((item) => {
            return (
                <div key={item.id}>{item.symbol}</div>
            );
        });
        const volume = list.map((item) => {
            if(item['30d']){
                return (
                    <div key={item.id}>{item['30d'].volume}</div>

                );
            }else{
                return <div  key={item.id}>none</div>
            }

        });
        const change = list.map((item) => {
            if(item['1d']) {
                return (
                    <div key={item.id}
                         style={{color: (item['1d'].market_cap_change_pct > 0) ? 'green' :'red'}}
                    >
                        <div>
                            <div>
                                {item['1d'].market_cap_change_pct}
                            </div>
                            <i className="fas fa-long-arrow-alt-up"/>
                        </div>
                    </div>

                );
            }
            else {
                return <div key={item.id}>none</div>
            }
        });
        const price = list.map((item) => {
            return (
                <div key={item.id}>{Math.floor(item.price * 100) / 100}</div>
            );
        });
        const highPriceBy24HR = list.map((item) => {
            if(item['1d']){
                return (
                    <div key={item.id}>{Math.floor(item.price - item['1d'].price_change * 100) / 100}</div>
                );
            }
            else {
                return <div key={item.id}>none</div>
            }
        });
        const lowPriceBy24HR = list.map((item) => {
            if(item['30d']){
                return (
                    <div key={item.id}>{Math.floor(item.price - item['30d'].price_change * 100) / 100}</div>
                );
            }
            else {
                return <div key={item.id}>none</div>
            }
        });
        const spread = list.map((item) => {
            if(item['30d']){
                return (
                    <div key={item.id}>{item['30d'].price_change_pct}</div>
                );
            }
            else {
                return <div key={item.id}>none</div>
            }
        });
        const date = list.map((item) => {
            if(item.high_timestamp){
                return (
                    <div key={item.id}>{item.high_timestamp.slice(0, -10)}</div>
                );
            }
            else {
                return <div key={item.id}>none</div>
            }
        });
    const content = !loading ? <div>
        <section className="details eth-markets">
            <div className="container">
                <div className="details-wrapper">
                    <div className="details-header">
                        <div className="details-text-wrapper">
                            <div className="details-header-name">
                                {props.tableName} Markets
                            </div>
                            <div className="details-header-volume">
                                Total Volume = $ 1565413
                            </div>
                        </div>
                        <SearchByName onSearchChange = {onSearchChange}/>
                    </div>
                    <div className="details-field">
                        <div className="fields-wrapper">
                            <TableCategories/>
                        </div>
                        <div className="field-info">
                            <div className="field-name markets-info">
                                {markets}
                            </div>
                            <div className="field-name currency-info">
                                {currency}
                            </div>
                            <div className="field-name volume-info">
                                {volume}
                            </div>
                            <div className="field-name change-info">
                                {change}
                            </div>
                            <div className="field-name price-info">
                                {price}
                            </div>
                            <div className="field-name high-info">
                                {highPriceBy24HR}
                            </div>
                            <div className="field-name low-info">
                                {lowPriceBy24HR}
                            </div>
                            <div className="field-name spread-info">
                                {spread}
                            </div>
                            <div className="field-name added-info">
                                {date}
                            </div>
                        </div>
                    </div>
                    <div className="details-strip"/>
                </div>
            </div>
        </section>
        <Pagination count={pagesCount}
                    page={currentPage}
                    onChange={handleChange}
        />
    </div> : null;
        return (
            <div>
                {spinner}
                {content}
            </div>
        );
};
export default Table