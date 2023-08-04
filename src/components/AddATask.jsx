import { Formik } from "formik";
import { Col, Form, Row, Button } from "react-bootstrap";
import * as yup from "yup";
import useAxios from "../hooks/useAxios";
import useLoadingTasks from "../hooks/useLoadingTasks";
import Swal from "sweetalert2";

const AddATask = () => {
  const { refetch } = useLoadingTasks();
  const { axiosFetch } = useAxios();

  const schema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string().required(),
  });
  const handleAddTask = async (task, { resetForm }) => {
    const newTask = { ...task, status: "active" };

    const { data } = await axiosFetch.post("new-task", { newTask });

    if (data.acknowledged) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your task has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
      resetForm();
    }
  };

  return (
    <div className=" px-6 mb-3 form-container">
      <h3 className="fs-3 text-center">Add A Tasks</h3>
      <Formik
        validationSchema={schema}
        onSubmit={handleAddTask}
        initialValues={{
          title: "",
          description: "",
        }}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                className="w-100"
                md="4"
                controlId="validationFormik01"
              >
                <Form.Label>Title </Form.Label>
                <Form.Control
                  className="w-100"
                  type="text"
                  name="title"
                  placeholder="Task title..."
                  value={values.title}
                  onChange={handleChange}
                  isInvalid={!!errors.title}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                as={Col}
                md="6"
                className="w-100"
                controlId="validationFormik03"
              >
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  className="w-100"
                  type="text"
                  placeholder="Description..."
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  isInvalid={!!errors.description}
                />

                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Button type="submit">Submit Task</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddATask;
