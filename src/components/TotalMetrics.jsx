import React from 'react'
import PropTypes from 'prop-types'

function TotalMetrics({ workouts }) {
    const calculateTotalMetrics = (workouts) => {
        let totalDistance = 0
        let totalDuration = 0

        workouts.forEach((workout) => {
            const metrics = workout.calculateMetrics()
            totalDistance += metrics.distance
            totalDuration += metrics.duration
        })

        return { totalDistance, totalDuration }
    }

    const { totalDistance, totalDuration } = calculateTotalMetrics(workouts)

    return (
        <div className='total-metrics'>
            <p>Total Distance: {totalDistance.toFixed(2)} km</p>
            <p>Total Duration: {totalDuration.toFixed(1)} hours</p>
        </div>
    )
}

TotalMetrics.propTypes = {
    workouts: PropTypes.arrayOf(
        PropTypes.shape({
            calculateMetrics: PropTypes.func.isRequired,
        })
    ).isRequired,
}

export default TotalMetrics
