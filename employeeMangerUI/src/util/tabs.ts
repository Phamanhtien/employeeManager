export class Tab {
    private tabId: number =  -1;
    private tabName: string = "";
  
    public Tab(tabId: number, tabName: string) {
      this.tabId = tabId;
      this.tabName = tabName;
    }
  
    public setTabId(tabId: number): void {
      this.tabId = tabId;
    }
  
    public getTabId(): number {
      return this.tabId;
    }
  
    public  setTabName(tabName: string): void {
      this.tabName = tabName;
    }
  
    public getTabName(): string {
      return this.tabName;
    }

    public setTabAsEmployeeTab () {
        this.tabId = -1;
        this.tabName = "Employee";
    }

    public setTabAsTeamTab() {
        this.tabId = -2;
        this.tabName = "Team";
    }
  }