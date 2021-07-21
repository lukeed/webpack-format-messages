export interface Messages {
	errors: string[];
	warnings: string[];
}

export function formatMessage(message: any): string;

export function formatMessages(stats: any): Messages;
export default formatMessages;
