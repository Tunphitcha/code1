import Image from 'next/image'


export const getStaticProps = async () => {
    console.log(process.env.DB_HOST)
    return {
        props: {
            db_host: process.env.DB_HOST,
            db_user: process.env.DB_USER,
            db_pass: process.env.DB_PASS,
        }
    }
}
function find({ db_host, db_user, db_pass }) {
    return (
        <div>
            <h1><center>ค้นหาข้อมูลผู้เช่า</center></h1>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label"> หมายเลขห้อง </label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <button type="submit" class="btn btn-success">ค้นหา </button>
            </form>

        </div>


    )
}

export default find