import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import * as z from "zod"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "./ui/form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useFetcher } from "@remix-run/react"

interface ModalProps {
	open: boolean
	onOpenChange: (a: boolean) => void
}

const loginFormSchema = z.object({
	email: z.string().email().nonempty(),
	password: z.string().nonempty(),
})

type LoginFormData = z.infer<typeof loginFormSchema>

function LoginForm() {
	const form = useForm<LoginFormData>({
		resolver: zodResolver(loginFormSchema),
	})

	const fetcher = useFetcher()

	function onSubmit(values: LoginFormData) {
		console.log(values)
		fetcher.submit({ password: values.password }, { method: "post", action: "/login" })
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormDescription>This is your public display name.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	)
}

function SignupForm() {
	const fetcher = useFetcher()
	console.log("FETCHER DATA" + fetcher.data)
	console.log("FETCHER STATE" + fetcher.state)

	return (
		<fetcher.Form method="post" action="/login">
			<input type="text" name="halo" value="test" />
			<button type="submit">Submit</button>
		</fetcher.Form>
	)
}

export function LoginModal({ open, onOpenChange }: ModalProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Welcome to Roomerang</DialogTitle>
					<DialogDescription>
						Login with your existing account or register for an account.
					</DialogDescription>
				</DialogHeader>
				<LoginForm />
			</DialogContent>
		</Dialog>
	)
}

export function SignupModal({ open, onOpenChange }: ModalProps) {
	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Are you sure absolutely sure?</DialogTitle>
					<DialogDescription>
						This action cannot be undone. This will permanently delete your account and remove your
						data from our servers.
					</DialogDescription>
				</DialogHeader>
				<SignupForm />
			</DialogContent>
		</Dialog>
	)
}
