import React, { useEffect } from 'react';
import Section from "../Progress/Section/Section";
import styles from "./Dashboard.module.scss";
import Section2 from "../Progress/Section/Section2";
import Section3 from "../Progress/Section/Section3";
import Section4 from "../Progress/Section/Section4";
import { connect } from 'react-redux'
import { fetchDiets } from "../../store/action/action"

const Dashboard = (props) => {
    console.log("times")

    useEffect(() => {
        props.fetchDiets()
    }, [])
    console.log(props.recentDiets)
    const today = new Date().toISOString().split('T')[0];
    console.log(today)
    const lastSixDays = props.recentDiets.diets
    const todaysData = props.recentDiets.diets[today]
    console.log(todaysData)
    return (
        <div className={styles["dashboard"]}>
            <Section dietsData={todaysData}></Section>
            <Section2 dietsData={lastSixDays}></Section2>
            <div className={styles["dashboard-grid"]}>
                <Section3></Section3>
                <Section4 dietsData={today}></Section4>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    recentDiets: state.diets
})

const mapDispatchToProps = dispatch => ({
    fetchDiets: () => dispatch(fetchDiets())
})



export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)