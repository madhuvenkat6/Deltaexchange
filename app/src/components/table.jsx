import styles from "./table.module.css"
export const Table = () => {
    return <div>
        <div style={{ display: 'flex', alignItems: "center" }}>
            <h1>Team Members</h1>
            <button className={styles.button}>Add Members<span style={{ fontSize: '15px' }}>＋</span></button>
        </div>
        <hr />
        <div style={{ display: "flex", margin: '10px' }}>

            <select style={{ marginRight: "20px" }}>
                <option>Company</option>
                <option></option>
            </select>

            <select>
                <option>Status</option>
                <option>Active</option>
                <option>Closed</option>
            </select>

        </div>
        <table>
            <thead>
                <tr style={{ textAlign: "left" }}>
                    <th ><input type="checkbox" /></th>
                    <th >Name</th>
                    <th >Company</th>
                    <th>Status</th>
                    <th >Last Updated</th>
                    <th >Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>Madhu venkat</td>
                    <td>LA galaxy</td>
                    <td>Active</td>
                    <td>7/07/2017</td>
                    <td>Manud in ahvha</td>
                    <td><button>Dlt</button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>chanti</td>
                    <td>Dc united</td>
                    <td>Closed</td>
                    <td>20/12/2021</td>
                    <td>Most Matches played</td>
                    <td><button>Dlt</button></td>
                </tr>
            </tbody>
        </table>
    </div>
}