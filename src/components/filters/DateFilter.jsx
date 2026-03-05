import { useState } from "react";

const DateFilter = ({ onFilter }) => {

    const [startDate, setStartDate] = useState("2024-01-01");
    const [endDate, setEndDate] = useState("2024-01-07");

    const handleSubmit = (e) => {
        e.preventDefault();

        const start = new Date(startDate);
        const end = new Date(endDate);

        const diffTime = end - start;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        if (diffDays > 7) {
            alert("El API de NASA solo permite un rango máximo de 7 días.");
            return;
        }

        if (diffDays < 0) {
            alert("La fecha de finalización debe ser posterior a la fecha de inicio.");
            return;
        }

        console.log("Filtro aplicado:", startDate, endDate);

        onFilter(startDate, endDate);
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>

            <label>
                Fecha de Inicio:
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </label>

            <label style={{ marginLeft: 10 }}>
                Fecha de Finalización:
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                />
            </label>

            <button type="submit" style={{ marginLeft: 10 }}>
                Filtrar
            </button>

        </form>
    );
};

export default DateFilter;