import MainLayout from '../layouts/MainLayout';

export default AboutScreen() {
    const currentDate = new Date().toLocaleDateString();
    return (
        <MainLayout>
            <h1>Todo List</h1>
            <h2>Edmund Yu</h2>
            <h3>{currentDate}</h3>
        </MainLayout>
    )
}
