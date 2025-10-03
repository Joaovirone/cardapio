function showCategory(categoryId) {
    const menuList = document.getElementById('menuList');
    const categories = ['salgados', 'doces', 'gelados', 'bebidas'];

    // Remove a classe "show" (para resetar animação)
    document.querySelectorAll('.menu-category').forEach(category => {
        category.classList.remove('show');
    });

    // Pega a categoria selecionada corretamente
    const selectedCategoryIndex = categories.indexOf(categoryId);
    const selectedCategory = categories.splice(selectedCategoryIndex, 1)[0];

    // Reordena colocando a selecionada primeiro
    const reorderedCategories = [selectedCategory, ...categories];

    // Reorganiza a ordem no DOM com animação
    reorderedCategories.forEach((category, index) => {
        const categoryElement = document.getElementById(category);
        if (categoryElement) {
            menuList.appendChild(categoryElement);

            setTimeout(() => {
                categoryElement.classList.add('show');
            }, 100 * index);
        }
    });
}

// Evento de clique para mostrar/ocultar descrições
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});
