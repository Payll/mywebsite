import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export type Locale = 'en' | 'fr';

const STORAGE_KEY = 'site:locale';

function normalizeLocale(value: string | null | undefined): Locale | null {
	if (!value) return null;
	const lower = value.toLowerCase();
	if (lower === 'fr' || lower.startsWith('fr-')) return 'fr';
	if (lower === 'en' || lower.startsWith('en-')) return 'en';
	return null;
}

export const locale = writable<Locale>('fr');

export function setLocale(next: Locale): void {
	locale.set(next);
	if (!browser) return;
	try {
		localStorage.setItem(STORAGE_KEY, next);
	} catch {
		// ignore
	}
	try {
		document.documentElement.lang = next;
	} catch {
		// ignore
	}
}

export function initLocale(): void {
	if (!browser) return;

	let initial: Locale | null = null;
	try {
		initial = normalizeLocale(localStorage.getItem(STORAGE_KEY));
	} catch {
		// ignore
	}

	if (!initial) {
		initial = normalizeLocale(navigator.language) ?? 'fr';
	}

	setLocale(initial);
}
