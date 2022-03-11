//import { Button } from 'bootstrap'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
      <div>
        <div className="mb-3">
          <lable className="form.lable">Email address</lable>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
        </div>

        <div className="mb-3">
          <lable className="form-lable">Example textarea</lable>
          <textarea className="form-control" id="exampleFormControlInput1" rows="3"></textarea>
        </div>
        <button type="button" className="btn btn-primary">primary</button>
      </div>
  )
}
