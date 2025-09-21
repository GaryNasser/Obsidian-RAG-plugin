import { ItemView, WorkspaceLeaf } from "obsidian";

// 定义一个独一无二的字符串，作为我们这个 View 的类型标识。
export const RAG_VIEW_TYPE = "rag-view";

// 这是我们自定义 View 的主类。它继承了 Obsidian 的 ItemView。
export class RAGView extends ItemView {
    // 构造函数，接收 leaf (可以理解为视图所在的“标签页”)
	constructor(leaf: WorkspaceLeaf) {
		super(leaf);
	}

    // 这个方法必须实现，返回我们定义的唯一视图类型。
	getViewType() {
		return RAG_VIEW_TYPE;
	}

    // 这个方法返回显示在标签页标题上的文字。
	getDisplayText() {
		return "RAG 查询";
	}
    
    // 这个方法返回显示在标签页标题上的图标。
    getIcon(): string {
        return "brain-circuit"; // 使用和 Ribbon 一样的图标
    }

    // 当 View 被打开时，会调用这个方法。
    // 我们在这里构建界面。
	async onOpen() {
		// containerEl 是这个 View 的根 HTML 元素。
        // 我们需要操作的是 this.containerEl.children[1]，这是内容区域。
		const container = this.containerEl.children[1];
        
        // 清空所有旧内容，以防万一。
		container.empty();
        
        // 在这里，我们创建了一个“空白的界面”。
        // 为了让它不那么空，我们先添加一个标题。
		container.createEl("h4", { text: "个人 RAG 助手" });
        container.createEl("p", { text: "这是一个新的空白界面，您可以在这里构建您的 RAG 功能。" });
	}

    // 当 View 被关闭时，会调用这个方法。
    // 我们可以在这里做一些清理工作。
	async onClose() {
		// 目前没什么需要清理的，所以留空。
	}
}