const { expect } = require('@playwright/test');

class DashboardPage {
    constructor(page) {
        this.page = page;
        this.statGrid = page.locator('#stat-grid');
        this.totalLibros = page.locator('#stat-grid .stat-card').nth(0);
    }

    async irPanel() {
        await this.page.locator('[data-view="panel"]').click();
        await this.statGrid.waitFor({ state: 'visible', timeout: 5000 });
    }

    async verificarEstadisticasVisibles() {
        await expect(this.statGrid).toBeVisible();
    }
}

module.exports = DashboardPage;