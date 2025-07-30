document.addEventListener('DOMContentLoaded', () => {
    // Definición de la estructura de la malla curricular con ramos y sus prerrequisitos
    const curriculum = {
        'Semestre 1': [
            { id: 'S1-01', name: 'Comunicación Oral y Escrita I', prerequisites: [] },
            { id: 'S1-02', name: 'Matemáticas', prerequisites: [] },
            { id: 'S1-03', name: 'Química', prerequisites: [] },
            { id: 'S1-04', name: 'Morfología I', prerequisites: [] },
            { id: 'S1-05', name: 'Fundamentos Biológicos de la Medicina I', prerequisites: [] },
            { id: 'S1-06', name: 'Inglés B1-I', prerequisites: [] },
        ],
        'Semestre 2': [
            { id: 'S2-01', name: 'Comunicación Oral y Escrita II', prerequisites: ['S1-01'] },
            { id: 'S2-02', name: 'Física', prerequisites: ['S1-02'] },
            { id: 'S2-03', name: 'Introducción a la Medicina', prerequisites: [] },
            { id: 'S2-04', name: 'Neuroanatomía', prerequisites: ['S1-04'] },
            { id: 'S2-05', name: 'Fundamentos Biológicos de la Medicina II', prerequisites: ['S1-05'] },
            { id: 'S2-06', name: 'Morfología II', prerequisites: ['S1-04'] },
            { id: 'S2-07', name: 'Inglés B1-II', prerequisites: ['S1-06'] },
        ],
        'Semestre 3': [
            { id: 'S3-01', name: 'Autogestión del Aprendizaje', prerequisites: [] },
            { id: 'S3-02', name: 'Genética Médica', prerequisites: ['S1-05', 'S2-05'] },
            { id: 'S3-03', name: 'Bioestadística', prerequisites: ['S1-02'] },
            { id: 'S3-04', name: 'Fisiología Médica I', prerequisites: ['S1-05', 'S2-05', 'S2-06'] },
            { id: 'S3-05', name: 'Microbiología y Parasitología', prerequisites: ['S1-05', 'S2-05'] },
            { id: 'S3-06', name: 'Procedimientos Clínicos Básicos', prerequisites: ['S2-06'] },
            { id: 'S3-07', name: 'Bioética', prerequisites: [] },
            { id: 'S3-08', name: 'Inglés B1-III', prerequisites: ['S2-07'] },
            { id: 'S3-09', name: 'Deportivo I', prerequisites: [] },
        ],
        'Semestre 4': [
            { id: 'S4-01', name: 'Trabajo en Equipo', prerequisites: ['S3-01'] },
            { id: 'S4-02', name: 'Epidemiología', prerequisites: ['S3-03'] },
            { id: 'S4-03', name: 'Educación en Salud', prerequisites: ['S2-03'] },
            { id: 'S4-04', name: 'Fisiología Médica II', prerequisites: ['S3-04'] },
            { id: 'S4-05', name: 'Taller de Anatomía Clínica', prerequisites: ['S2-04', 'S3-04', 'S2-06'] },
            { id: 'S4-06', name: 'Patología Integrada I', prerequisites: ['S2-04', 'S1-05', 'S2-05', 'S2-06', 'S3-04'] },
            { id: 'S4-07', name: 'MIC I', prerequisites: ['S1-05', 'S2-05', 'S2-04', 'S2-06', 'S3-04'] },
            { id: 'S4-08', name: 'Inglés B2-I', prerequisites: ['S3-08'] },
        ],
        'Semestre 5': [
            { id: 'S5-01', name: 'Comprensión de Contextos Sociales', prerequisites: ['S2-01'] },
            { id: 'S5-02', name: 'Farmacología General', prerequisites: ['S4-07', 'S4-04'] },
            { id: 'S5-03', name: 'Preclínicos Integrados (Semiología, Laboratorios, Imágenes)', prerequisites: ['S4-04', 'S4-05', 'S4-06'] },
            { id: 'S5-04', name: 'Patología Integrada II', prerequisites: ['S4-06'] },
            { id: 'S5-05', name: 'Inglés B2-II', prerequisites: ['S4-08'] },
        ],
        'Semestre 6': [
            { id: 'S6-01', name: 'Comprensión Contextos Culturales', prerequisites: ['S5-01'] },
            { id: 'S6-02', name: 'Farmacología Clínica', prerequisites: ['S5-02', 'S5-04'] },
            { id: 'S6-03', name: 'Psicología Médica', prerequisites: ['S2-03'] },
            { id: 'S6-04', name: 'Medicina Interna I', prerequisites: ['S5-03', 'S5-02'] },
            { id: 'S6-05', name: 'Salud Pública', prerequisites: ['S4-02'] },
            { id: 'S6-06', name: 'Medicina Familiar', prerequisites: ['S4-03'] },
            { id: 'S6-07', name: 'Electivo Médico I', prerequisites: [] },
            { id: 'S6-08', name: 'Inglés B2-III', prerequisites: ['S5-05'] },
        ],
        'Semestre 7': [
            { id: 'S7-01', name: 'Ética y Responsabilidad Social', prerequisites: ['S6-01', 'S5-01'] },
            { id: 'S7-02', name: 'Manejo del Estrés y Calidad de Vida', prerequisites: ['S6-03'] },
            { id: 'S7-03', name: 'Psicopatología', prerequisites: ['S6-03'] },
            { id: 'S7-04', name: 'Medicina Interna II', prerequisites: ['S6-04'] },
            { id: 'S7-05', name: 'Neurociencias', prerequisites: ['S6-04', 'S2-04', 'S6-02'] },
            { id: 'S7-06', name: 'Medicina Física', prerequisites: ['S6-06'] },
            { id: 'S7-07', name: 'Especialidades I', prerequisites: ['S6-04'] },
        ],
        'Semestre 8': [
            { id: 'S8-01', name: 'Responsabilidad Social', prerequisites: ['S7-01'] },
            { id: 'S8-02', name: 'Investigación I', prerequisites: ['S3-03', 'S3-07'] }, // Bioestadística, Bioética
            { id: 'S8-03', name: 'Psiquiatría', prerequisites: ['S7-03'] },
            { id: 'S8-04', name: 'Cirugía', prerequisites: ['S7-04'] }, // Medicina Interna II
            { id: 'S8-05', name: 'Especialidades II', prerequisites: ['S7-04', 'S7-07'] }, // Medicina Interna II, Especialidades I
        ],
        'Semestre 9': [
            { id: 'S9-01', name: 'Investigación II', prerequisites: ['S8-02'] },
            { id: 'S9-02', name: 'Ginecología y Obstetricia', prerequisites: ['S7-04', 'S8-04'] }, // Medicina Interna II, Cirugía
            { id: 'S9-03', name: 'Electivo Médico II', prerequisites: ['S8-04'] }, // Cirugía
            { id: 'S9-04', name: 'Medicina Basada en la Evidencia', prerequisites: ['S9-01'] },
            { id: 'S9-05', name: 'Ética Médica', prerequisites: ['S7-01'] },
            { id: 'S9-06', name: 'MIC II', prerequisites: ['S7-04', 'S8-04'] }, // Medicina Interna II, Cirugía
            { id: 'S9-07', name: 'Deportivo II', prerequisites: ['S3-09'] },
        ],
        'Semestre 10': [
            { id: 'S10-01', name: 'Cirugía Infantil', prerequisites: ['S8-04'] },
            { id: 'S10-02', name: 'Pediatría', prerequisites: ['S8-04', 'S7-04'] }, // Cirugía, Medicina Interna II
            { id: 'S10-03', name: 'Medicina Legal', prerequisites: ['S8-04', 'S9-05'] }, // Cirugía, Ética Médica
            { id: 'S10-04', name: 'Geriatría', prerequisites: ['S7-04'] },
            { id: 'S10-05', name: 'Administración en Salud', prerequisites: ['S6-05'] },
            { id: 'S10-06', name: 'Taller de Imagenología', prerequisites: ['S8-04', 'S8-05'] }, // Cirugía, Especialidades II
            { id: 'S10-07', name: 'Medicinas Complementarias', prerequisites: ['S8-04'] }, // Cirugía
        ],
        'Semestre 11': [
            { id: 'S11-01', name: 'Medicina Interna I (Internado)', prerequisites: ['S7-04'] },
            { id: 'S11-02', name: 'Cirugía I (Internado)', prerequisites: ['S8-04'] },
            { id: 'S11-03', name: 'Pediatría I (Internado)', prerequisites: ['S10-02'] },
            { id: 'S11-04', name: 'Ginecología y Obstetricia I (Internado)', prerequisites: ['S9-02'] },
        ],
        'Semestre 12': [
            { id: 'S12-01', name: 'Medicina Interna II (Internado)', prerequisites: ['S11-01'] },
            { id: 'S12-02', name: 'Cirugía II (Internado)', prerequisites: ['S11-02'] },
            { id: 'S12-03', name: 'Pediatría II (Internado)', prerequisites: ['S11-03'] },
            { id: 'S12-04', name: 'Ginecología y Obstetricia II (Internado)', prerequisites: ['S11-04'] },
        ],
        'Semestre 13': [
            { id: 'S13-01', name: 'Medicina Familiar I (Internado)', prerequisites: ['S6-06'] },
            { id: 'S13-02', name: 'Rural I (Internado)', prerequisites: ['S6-05'] },
            { id: 'S13-03', name: 'Electivo 1 I (Internado)', prerequisites: [] },
            { id: 'S13-04', name: 'Electivo 2 I (Internado)', prerequisites: [] },
            { id: 'S13-05', name: 'Integrado de Título I', prerequisites: ['S9-01', 'S9-04', 'S9-05'] },
        ],
        'Semestre 14': [
            { id: 'S14-01', name: 'Medicina Familiar II (Internado)', prerequisites: ['S13-01'] },
            { id: 'S14-02', name: 'Rural II (Internado)', prerequisites: ['S13-02'] },
            { id: 'S14-03', name: 'Electivo 1 II (Internado)', prerequisites: ['S13-03'] },
            { id: 'S14-04', name: 'Electivo 2 II (Internado)', prerequisites: ['S13-04'] },
            { id: 'S14-05', name: 'Integrado de Título II', prerequisites: ['S13-05'] },
        ],
    };

    // Recupera los ramos aprobados del almacenamiento local del navegador
    let approvedCourses = new Set(JSON.parse(localStorage.getItem('approvedCourses') || '[]'));

    const curriculumDiv = document.getElementById('curriculum');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const closeButton = document.querySelector('.close-button');

    // Función para renderizar (dibujar) la malla curricular
    function renderCurriculum() {
        curriculumDiv.innerHTML = ''; // Limpia el contenido existente
        const allCourses = Object.values(curriculum).flat(); // Obtiene una lista plana de todos los ramos

        // Itera sobre cada semestre y crea su columna
        for (const semesterName in curriculum) {
            const semesterDiv = document.createElement('div');
            semesterDiv.classList.add('semester');

            const semesterTitle = document.createElement('h2');
            semesterTitle.textContent = semesterName;
            semesterDiv.appendChild(semesterTitle);

            const coursesList = document.createElement('ul');
            coursesList.classList.add('courses');

            // Añade los ramos al semestre actual
            curriculum[semesterName].forEach(course => {
                const courseItem = document.createElement('li');
                courseItem.classList.add('course-item');
                courseItem.dataset.id = course.id; // Guarda el ID del ramo en el elemento HTML
                courseItem.textContent = course.name;

                // Aplica la clase 'approved' si el ramo ya está aprobado
                if (approvedCourses.has(course.id)) {
                    courseItem.classList.add('approved');
                }

                // Verifica si el ramo está bloqueado (requisitos no cumplidos)
                const isBlocked = !checkPrerequisites(course.id, allCourses);
                if (isBlocked && !approvedCourses.has(course.id)) { // Solo bloquea si no está aprobado
                    courseItem.classList.add('blocked');
                }

                // Añade el evento de clic a cada ramo
                courseItem.addEventListener('click', () => toggleCourseApproval(course.id));
                coursesList.appendChild(courseItem);
            });

            semesterDiv.appendChild(coursesList);
            curriculumDiv.appendChild(semesterDiv);
        }
    }

    // Función para verificar si los prerrequisitos de un ramo están cumplidos
    function checkPrerequisites(courseId, allCourses) {
        const course = allCourses.find(c => c.id === courseId);
        if (!course) return true; // Si el ramo no se encuentra, asume que no tiene problemas (no debería ocurrir)

        for (const prereqId of course.prerequisites) {
            if (!approvedCourses.has(prereqId)) {
                return false; // Un prerrequisito no está aprobado
            }
        }
        return true; // Todos los prerrequisitos están aprobados
    }

    // Función para obtener el nombre de un ramo por su ID
    function getCourseNameById(courseId, allCourses) {
        const course = allCourses.find(c => c.id === courseId);
        return course ? course.name : `Ramo Desconocido (${courseId})`;
    }

    // Función para cambiar el estado de aprobación de un ramo
    function toggleCourseApproval(courseId) {
        const courseElement = document.querySelector(`[data-id="${courseId}"]`);
        const allCourses = Object.values(curriculum).flat(); // Obtiene la lista más reciente de todos los ramos
        const course = allCourses.find(c => c.id === courseId);

        if (!course) return; // Si el ramo no se encuentra, sale

        if (approvedCourses.has(courseId)) {
            // Si el ramo ya está aprobado, intenta desaprobarlo.
            // Primero, verifica si algún ramo posterior depende de este.
            const dependentCourses = allCourses.filter(c => c.prerequisites.includes(courseId));
            const approvedDependentCourses = dependentCourses.filter(c => approvedCourses.has(c.id));

            if (approvedDependentCourses.length > 0) {
                const dependentNames = approvedDependentCourses.map(c => `"${c.name}"`).join(', ');
                showModal(`No puedes desaprobar "${course.name}" porque es un requisito para los siguientes ramos ya aprobados: ${dependentNames}.`);
                return;
            }

            approvedCourses.delete(courseId);
            courseElement.classList.remove('approved');
        } else {
            // Si el ramo no está aprobado, intenta aprobarlo
            const prerequisitesMet = checkPrerequisites(courseId, allCourses);

            if (prerequisitesMet) {
                approvedCourses.add(courseId);
                courseElement.classList.add('approved');
            } else {
                // Obtiene los nombres de los prerrequisitos faltantes
                const missingPrerequisites = course.prerequisites.filter(prereqId => !approvedCourses.has(prereqId));
                const missingPrereqNames = missingPrerequisites.map(prereqId => getCourseNameById(prereqId, allCourses)).join(', ');
                showModal(`No puedes aprobar "${course.name}" porque faltan los siguientes requisitos: ${missingPrereqNames}.`);
            }
        }
        // Guarda el estado actualizado en localStorage
        localStorage.setItem('approvedCourses', JSON.stringify(Array.from(approvedCourses)));
        renderCurriculum(); // Vuelve a renderizar para actualizar los estados de "bloqueado"
    }

    // Función para mostrar el modal de mensajes
    function showModal(message) {
        modalMessage.textContent = message;
        modal.style.display = 'flex'; // Usa flex para centrar el contenido del modal
    }

    // Cierra el modal cuando se hace clic en el botón de cerrar
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cierra el modal cuando se hace clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Renderizado inicial de la malla curricular al cargar la página
    renderCurriculum();
});
