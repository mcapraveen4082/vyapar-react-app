import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (

            <div className="header-main-wrapper">
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#myVyaparNav">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand brand-logo" to="/">
                                <img src="Images/logo.svg" alt="VYAPAR accouting app logo" title=" vyapar logo"/>
                            </Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myVyaparNav">
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="{{route('welcome')}}">Home</a></li>
                                <li><a href="{{route('pricing')}}">Pricing</a></li>
                                <li><a href="{{route('about_us')}}">About Us</a></li>
                                <li><a href="{{route('desktop')}}">Desktop</a></li>
                                <li><a href="{{ route('ca.connect') }}">CA Connect</a></li>
                                <li><a href="{{ route('distributor.create') }}">Partner with us</a></li>
                                <li><a href="{{ route('login') }}"><span
                                    className="glyphicon glyphicon-log-in"></span> Login</a></li>
                                <li><a href="{{ route('register') }}"><span
                                    className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li className="dropdown">
                                    <a>Praveen Kumar</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="{{ route('home') }}">My Account</a></li>
                                        <li><a href="{{ route('rewards') }}">Rewards</a></li>
                                        <li><a href="{{ route('vypRoleMap') }}">Assign Role</a></li>
                                        <li><a href="{{ route('vypRoleEdit') }}">Delete User Role</a></li>
                                        <li><a href="{{ route('vypLicense') }}">Generate License</a></li>
                                        <li><a href="{{ route('download.bill') }}">Generate invoice</a></li>
                                        <li><a href="{{ route('vypCoupon') }}">Create Coupon</a></li>
                                        <li><a href="{{ route('vypEmailBounce') }}">Email Unsubscribe</a></li>
                                        <li><a href="{{ route('vypResetPassord') }}">Change User Password</a></li>
                                        <li><a href="{{ route('channelPartnerLicense') }}">View Licenses</a></li>
                                        <li><a href="{{ route('customerData') }}">Customer Data</a></li>
                                        <li><a href="{{ route('vypCouponAssign') }}">Assign Coupon</a></li>
                                        <li><a href="{{ route('vypCouponEdit') }}">Edit Coupon</a></li>
                                        <li>
                                            <a href="{{ route('vyp.invoices') }}"> My Invoices</a>
                                        </li>
                                        <li><a href="{{ route('ops.controls') }}">Ops Controls</a></li>
                                        <li className="divider"></li>
                                        <li>
                                            <a href="{{ route('vyp.user.edit','profile') }}"> Edit Profile</a>
                                        </li>
                                        <li>
                                            <a href="{{ route('vyp.user.edit','password') }}"> Change Password</a>
                                        </li>
                                        <li>
                                            <a href="{{ route('logout') }}"
                           //                     onClick="event.preventDefault();
                           // document.getElementById('logout-form').submit();"
                                            >
                                                Logout
                                            </a>
                                            <form id="logout-form" action="{{ route('logout') }}" method="POST">
                                            </form>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        
        );
    }
}

export default Header;
