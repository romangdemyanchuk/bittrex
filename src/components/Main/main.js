import React, {Component} from 'react';
import Table from "../Table";
import FooterBlock from "../FooterBlock";
import HeaderBlock from "../HeaderBlock";
import IntroBlock from "../IntroBlock"
import './main.css';

 class Main extends Component {
    render() {
        const tables = ['USD', 'ETH', 'USDT', 'BTC'];
         const tablesContent = tables.map((tableName) => {
             console.log('item', tableName);
             return (
                 <div key={tableName}>
                     <Table tableName={tableName}/>
                 </div>
             );
         });
        return (
            <div>
                <div className="page-wrapper">
                    <HeaderBlock/>
                    <IntroBlock/>
                    {tablesContent}
                    <FooterBlock/>
                </div>
            </div>
        );
    }
}
export default Main