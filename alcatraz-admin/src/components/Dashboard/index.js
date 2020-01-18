import React, { Component } from 'react';
import './styles.css'

export default class Dashboard extends Component {

    render() {
        return (
            <div class="dashboard">
                <div className='welcome'>
                    <div className='dashboard-title'> Dashboard </div>
                    <div className='dashboard-welcome'> Welcome to Alcatraz <b>Dashboard</b> </div>
                </div>

                <div className='dashboard-infos'>
                    <div className='dashboard-box'>
                        <div className='quantaty'>
                            24 Movies
                        </div>
                        <div className='growing-percentage'>
                            30% +
                        </div>
                    </div>

                    <div className='dashboard-box'>
                        <div className='quantaty'>
                            22 Categories
                        </div>
                        <div className='growing-percentage'>
                            0% +
                        </div>
                    </div>

                    <div className='dashboard-box'>
                        <div className='quantaty'>
                            1.024 Users
                        </div>
                        <div className='growing-percentage'>
                            999% +
                        </div>
                    </div>

                    <div className='dashboard-box'>
                        <div className='quantaty'>
                            15.053 Access
                        </div>
                        <div className='growing-percentage'>
                            999% +
                        </div>
                    </div>
                </div>

                <div className='movie-list'>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>EDIT</th>
                            <th>REMOVE</th>
                        </tr>
                        <tr>
                            <td>Joker</td>
                            <td className='view'>View</td>
                            <td className='edit'>EDIT</td>
                            <td className='remove'>REMOVE</td>
                        </tr>
                        <tr>
                            <td>Fight Club</td>
                            <td className='view'>View</td>
                            <td className='edit'>EDIT</td>
                            <td className='remove'>REMOVE</td>
                        </tr>
                        <tr>
                            <td>Life is Beautiful</td>
                            <td className='view'>View</td>
                            <td className='edit'>EDIT</td>
                            <td className='remove'>REMOVE</td>
                        </tr>
                    </table>

                    <div className='see-all-button'> List all Movies</div>
                </div>
            </div>
        );
    }
}