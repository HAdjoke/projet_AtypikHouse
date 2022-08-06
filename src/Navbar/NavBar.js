import { useEffect, useState } from "react"
import React, {useState, useEffect} from 'react'
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav>
            <ul className="liste">
                <li className="Items">Acceuil</li>
                <li className="Items">Sevices</li>
                <li className="Items">Contact</li>
            </ul>
            <button className="btn">BTN</button>
        </nav>
    )
}